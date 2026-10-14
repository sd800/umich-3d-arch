"""Public-source exterior interpretations; metric section heights remain estimates.
Official footprints stay authoritative. Rectangles split wings within those outlines,
not replace them. OSM parts supply secondary plan edges, never unchecked heights.
"""
from dataclasses import dataclass
from shapely.geometry import box

NORTH={
# facility: ground storeys, approximate eaves, wall, roof
'1000395':(3,13.8,'NorthBrick','RoofGravel'), # FXB
'1000396':(4,18.5,'Sandstone','RoofZinc'),
'1000397':(3,13.4,'NorthBrick','RoofMembrane'),
'1000399':(2,8.4,'NorthBrick','RoofGravel'),
'1000400':(2,9.3,'NorthBrick','RoofGravel'),
'1000402':(3,13.1,'NorthBrick','RoofMembrane'),
'1000403':(3,12.8,'NorthBrick','RoofGravel'),
'1000404':(3,13.5,'NorthBrick','RoofMembrane'),
'1000405':(2,10.4,'NorthBrick','RoofGravel'),
'1000406':(5,22.0,'NorthBrick','RoofMembrane'),
'1000407':(3,13.8,'NorthBrick','RoofGravel'),
'1000414':(3,12.8,'NorthBrick','RoofGravel'),
'1000415':(2,9.0,'NorthBrick','RoofMembrane'),
'1000416':(2,9.8,'NorthBrick','RoofGravel'),
'1000417':(2,9.8,'NorthBrick','RoofGravel'),
'1000420':(2,8.8,'NorthBrick','RoofGravel'),
'1000421':(1,7.8,'NorthBrick','RoofMembrane'),
'1000422':(1,7.0,'NorthBrick','RoofMembrane'),
'1000424':(2,11.2,'NorthBrick','RoofZinc'),
'1000425':(2,10.0,'NorthBrick','RoofGravel'),
'1000429':(3,13.8,'NorthBrick','RoofGravel'),
'1000432':(2,10.2,'NorthBrick','RoofMembrane'),
'1000435':(1,6.8,'NorthBrick','RoofGravel'),
'1000436':(2,9.4,'NorthBrick','RoofGravel'),
'1000437':(4,17.6,'NorthBrick','RoofMembrane'),
'1000439':(2,9.4,'NorthBrick','RoofZinc'),
'1000440':(3,13.2,'NorthBrick','RoofMembrane'),
'1000441':(3,13.4,'NorthBrick','RoofGravel'),
'1000442':(2,10.6,'NorthBrick','RoofMembrane'),
'1000443':(3,13.2,'NorthBrick','RoofGravel'),
'1000444':(4,17.6,'NorthBrick','RoofGravel'),
'1000445':(2,8.2,'NorthBrick','RoofGravel'),
'1000446':(2,10.5,'NorthBrick','RoofZinc'),
'1000447':(3,13.8,'NorthBrick','RoofGravel'),
'1000448':(4,17.8,'NorthBrick','RoofGravel'),
'1005059':(3,15.4,'NorthBrick','RoofZinc'),
'1005092':(4,18.4,'NorthBrick','RoofMembrane'),
'1005224':(1,11.4,'NorthBrick','RoofZinc'),
'1005418':(4,19.6,'MetalPanel','RoofZinc'),
'1005439':(2,10.8,'NorthBrick','RoofMembrane'),
'1005504':(5,21.8,'BuffBrick','RoofMembrane'),
}
ROSS={'1005188':(6,28.0,'Terracotta','RoofZinc'),'1005370':(6,25.4,'Terracotta','RoofZinc'),'1000137':(3,13.3,'Sandstone','RoofGreen'),'1000139':(8,28.8,'Terracotta','RoofMembrane'),'1000135':(5,19.6,'Terracotta','RoofMembrane'),'1000253':(4,13.6,'Concrete','RoofGravel')}
# xmin, ymin, xmax, ymax, eaves, storeys, wall. Clip every piece to the source footprint.
WINGS={
'1005188':[(3,-439,20,-373,26.8,6,'Terracotta'),(20,-438,48,-375,10.2,2,'Glass'),(48,-429,72,-373,28.0,6,'Terracotta'),(3,-376,72,-350,11.4,2,'Terracotta'),(3,-478,72,-438,12.6,2,'Terracotta')],
'1000396':[(1798,1530,1878,1630,9.0,2,'Sandstone'),(1878,1530,1960,1551,14.8,3,'Sandstone')],
'1000397':[(2018,1583,2040,1646,14.3,3,'NorthBrick'),(2040,1605,2095,1623,8.8,2,'Glass')],
'1000406':[(2050,1274,2108,1328,12.4,3,'Glass')],
'1000407':[(1965,1805,2040,1864,18.2,4,'Glass'),(2098,1832,2150,1864,12.0,3,'NorthBrick'),(1965,1756,2150,1798,8.4,2,'NorthBrick')],
'1000415':[(2413,1755,2499,1766,6.8,1,'NorthBrick')],
'1000429':[(2040,1568,2104,1590,9.4,2,'NorthBrick')],
'1000432':[(1686,1343,1873,1376,9.0,2,'NorthBrick'),(1819,1376,1873,1465,12.4,2,'WhitePanel')],
'1000436':[(1927,1366,1950,1433,6.8,1,'NorthBrick')],
'1000440':[(1412,1381,1508,1507,8.0,2,'NorthBrick'),(1412,1507,1508,1534,15.6,3,'NorthBrick'),(1412,1534,1508,1630,17.8,4,'NorthBrick')],
'1000442':[(1718,1530,1803,1570,8.2,2,'NorthBrick'),(1718,1588,1803,1631,12.0,2,'NorthBrick')],
'1000446':[(2156,1240,2207,1271,6.4,1,'NorthBrick')],
'1000448':[(2032,1690,2095,1744,12.4,3,'NorthBrick'),(1980,1650,2011,1778,16.2,4,'NorthBrick')],
'1005059':[(1705,1637,1743,1662,17.0,3,'NorthBrick'),(1743,1662,1803,1688,8.8,2,'Glass')],
'1005092':[(1840,1745,1909,1765,12.2,3,'NorthBrick'),(1867,1765,1885,1814,18.4,4,'Glass')],
'1005418':[(2395,1907,2495,1934,12.8,2,'MetalPanel')],
'1005439':[(1375,1309,1415,1344,9.0,1,'NorthBrick'),(1415,1344,1436,1385,11.5,2,'NorthBrick')],
'1005504':[(1737,1747,1772,1782,14.8,3,'BuffBrick'),(1772,1747,1847,1762,18.7,4,'BuffBrick')],
}
REFERENCES={
'1005188':'https://www.kpf.com/story/the-making-of-university-of-michigan-stephen-m-ross-school-of-business',
'1005370':'https://www.kpf.com/story/the-making-of-university-of-michigan-stephen-m-ross-school-of-business',
'1000396':'https://www.dc.umich.edu/about-the-dc/history/',
'1005092':'https://tour.umich.edu/text-based/tours/engineering/',
'1005418':'https://tour.umich.edu/text-based/tours/engineering/',
'1005504':'https://leinweber.bldg.umich.edu/about/',
'1000432':'https://taubmancollege.umich.edu/about/facilities/art-architecture-building/',
'1000440':'https://smtd.umich.edu/facilities/earl-v-moore-building/',
'1000446':'https://www.fordlibrarymuseum.gov/visit/library',
}

def volumes(ident,p,osm_parts=()):
    profile=(NORTH|ROSS).get(ident)
    if not profile:return []
    levels,height,wall,roof=profile;remaining=p;result=[]
    if ident=='1000396':remaining=remaining.difference(box(1878,1611,1960,1630))
    for a,b,c,d,hh,n,mat in WINGS.get(ident,[]):
        q=remaining.intersection(box(a,b,c,d));remaining=remaining.difference(q)
        if not q.is_empty:result.append((q,hh,n,mat,'RoofGlazing'if mat=='Glass'and ident in ['1005188','1005092']else roof))
    # A few laboratories have individually mapped storey-height parts. Do not
    # use contradictory height=10m / six-storey tags as measured roof elevations.
    if ident=='1000441':
        for props,q in osm_parts:
            if not props.get('building:part'):continue
            try:n=int(props.get('building:levels','0'))
            except ValueError:continue
            if not 1<=n<=6:continue
            q=q.intersection(remaining)
            if q.area<8:continue
            remaining=remaining.difference(q);result.append((q,n*3.8+1,n,wall,roof))
    if not remaining.is_empty:result.append((remaining,height,levels,wall,roof))
    return result
