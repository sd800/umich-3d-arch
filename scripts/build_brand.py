"""Draw the editable M/map icon and matching raster sizes from one geometry."""
from pathlib import Path
from PIL import Image, ImageDraw

root=Path(__file__).resolve().parents[1]
assets=root/'assets'
blue='#00274c'
maize='#ffcb05'
scale=4
# The university reference spans 282 x 201 units. Scale both axes uniformly.
reference=[(4,10),(87,10),(145,89),(203,10),(286,10),(286,66),(265,66),(265,155),(286,155),(286,211),(181,211),(181,155),(203,155),(203,98),(145,176),(87,98),(87,155),(109,155),(109,211),(4,211),(4,155),(25,155),(25,66),(4,66)]
factor=360/282
points=[(76+(x-4)*factor,62+(y-10)*factor) for x,y in reference]
path='M'+' '.join(f'{x:.3f},{y:.3f}' for x,y in points)+'Z'
svg=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Maize M and rectangular campus map</title><rect width="512" height="512" rx="72" fill="{blue}"/><path d="{path}" fill="{maize}"/><rect x="122" y="352" width="268" height="112" fill="{maize}"/><path d="M169 388L188 381L209 397L229 385M167 425L187 412L211 427L230 416" fill="none" stroke="{blue}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"/><path d="M221 431L246 412L265 421L287 406" fill="none" stroke="{blue}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="8 9"/><path d="M302 380C289 380 280 389 280 400C280 412 302 434 302 434S324 412 324 400C324 389 315 380 302 380Z" fill="{blue}"/><circle cx="302" cy="399" r="8" fill="{maize}"/></svg>'''
(assets/'brand/m-map.svg').write_text(svg+'\n')
im=Image.new('RGB',(2048,2048),blue)
draw=ImageDraw.Draw(im)
draw.polygon([(x*scale,y*scale) for x,y in points],fill=maize)
draw.rectangle((122*scale,352*scale,390*scale,464*scale),fill=maize)
def line(pts,width=6):
    draw.line([(x*scale,y*scale) for x,y in pts],fill=blue,width=width*scale,joint='curve')
    for x,y in pts:
        draw.ellipse(((x-width/2)*scale,(y-width/2)*scale,(x+width/2)*scale,(y+width/2)*scale),fill=blue)
line([(169,388),(188,381),(209,397),(229,385)])
line([(167,425),(187,412),(211,427),(230,416)])
line([(221,431),(228,426)])
line([(238,418),(245,413)])
line([(254,416),(261,419)])
line([(272,416),(279,411)])
draw.polygon([(280*scale,400*scale),(324*scale,400*scale),(302*scale,434*scale)],fill=blue)
draw.ellipse((280*scale,380*scale,324*scale,422*scale),fill=blue)
draw.ellipse((294*scale,391*scale,310*scale,407*scale),fill=maize)
alpha=Image.new('L',im.size,0)
ImageDraw.Draw(alpha).rounded_rectangle((0,0,2047,2047),radius=72*scale,fill=255)
im.putalpha(alpha)
for size,target in [(1024,'brand/m-map.png'),(192,'brand/m-map-192.png'),(180,'apple-touch-icon.png'),(32,'favicon-32.png'),(16,'favicon-16.png')]:
    im.resize((size,size),Image.Resampling.LANCZOS).save(assets/target)
im.resize((256,256),Image.Resampling.LANCZOS).save(root/'favicon.ico',sizes=[(16,16),(32,32),(48,48),(64,64),(128,128),(256,256)])
print(f'M: 360 x {201*factor:.2f}; map: upright 268 x 112 rectangle; all icon sizes generated.')
