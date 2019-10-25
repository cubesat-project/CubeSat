
import math
import time
from datetime import datetime
import ephem
degrees_per_radian = 180.0 / math.pi
home = ephem.Observer()
home.lon = '-81.174415'   # +E
home.lat = '42.593948'      # +N
home.elevation = 80 # meters
# Always get the latest ISS TLE data from:
# http://spaceflight.nasa.gov/realdata/sightings/SSapplications/Post/JavaSSOP/orbit/ISS/SVPOST.html
iss = ephem.readtle('ISS',
    '1 25544U 98067A   19093.54651620  .00001767  00000-0  35856-4 0  9993',
    '2 25544  51.6445  12.2674 0002441 141.3518 216.2348 15.52476822163652'
)
while True:
    home.date = datetime.utcnow()
    iss.compute(home)
    print('iss: altitude %4.1f deg, azimuth %5.1f deg' % (iss.alt * degrees_per_radian, iss.az * degrees_per_radian))
    time.sleep(1.0)