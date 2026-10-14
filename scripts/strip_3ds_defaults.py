"""Omit optional all-zero smoothing-group tables; geometry is untouched."""
from pathlib import Path
import struct,json
r=Path(__file__).resolve().parents[1];path=r/'output/UMich_AnnArbor.3ds';data=path.read_bytes();removed=0

def chunks(start,end):
    global removed
    output=[];p=start
    while p<end:
        tag,size=struct.unpack_from('<HI',data,p);stop=p+size
        assert size>=6 and stop<=end
        if tag==0x4150 and not any(data[p+6:stop]):removed+=1;p=stop;continue
        if tag in [0x4D4D,0x3D3D,0x4100]:payload=chunks(p+6,stop)
        elif tag==0x4000:
            name_end=data.index(b'\0',p+6,stop)+1;payload=data[p+6:name_end]+chunks(name_end,stop)
        elif tag==0x4120:
            faces=struct.unpack_from('<H',data,p+6)[0];child_start=p+8+faces*8;payload=data[p+6:child_start]+chunks(child_start,stop)
        else:payload=data[p+6:stop]
        output.append(struct.pack('<HI',tag,len(payload)+6)+payload);p=stop
    assert p==end
    return b''.join(output)
result=chunks(0,len(data));(r/'tmp/3ds-with-explicit-zero-smoothing.3ds').write_bytes(data);path.write_bytes(result)
info={'optional_zero_smoothing_tables_omitted':removed,'before_bytes':len(data),'after_bytes':len(result),'vertices_faces_and_materials':'Unchanged; optional no-smoothing tables omitted.'};(r/'output/3ds_storage_validation.json').write_text(json.dumps(info,indent=2)+'\n');print(info)
