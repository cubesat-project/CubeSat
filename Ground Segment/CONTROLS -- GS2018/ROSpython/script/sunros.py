#!/usr/bin/env python


import rospy
from std_msgs.msg import Int16
from geometry_msgs.msg import Vector3
import ephem
import datetime
from math import degrees as deg


def callback0(data):
    rospy.loginfo(rospy.get_caller_id() + 'I heard %s', data)

    global lon, lat, z1
    lon = data.x
    lat = data.y
    z1 = data.z


def mainloop():
    rospy.init_node('moonros', anonymous=True)  # node name talker
    pub = rospy.Publisher('motor_1', Int16, queue_size=10)
    pub1 = rospy.Publisher('motor_2', Int16, queue_size=10)

    rate = rospy.Rate(0.5)  # hz send

    while not rospy.is_shutdown():  # test if shutdown

        now = datetime.datetime.utcnow()
        home = ephem.Observer()
        home.date = now
        if z1 == 0:
            home.lat, home.lon = '42.593948', '-81.174415'
        else:
            home.lat = lat
            home.lon = lon

        sun = ephem.Sun()
        sun.compute(home)
        sun_azimuth = round(deg(float(sun.az)), 0)
        sun_altitude = round(deg(float(sun.alt)), 0)

        motor_1 = sun_altitude  # for gearbox
        if sun_azimuth > 180:
            motor_2 = sun_azimuth - 360
        else:
            motor_2 = sun_azimuth
        pub.publish(motor_1)
        pub1.publish(motor_2)
        hello_str = "azal%s  %s" % (motor_1, motor_2)
        rospy.loginfo(hello_str)

        rospy.Subscriber('GPSlocation', Vector3, callback0)
        rate.sleep()
    # rospy.spin()
    # spin() simply keeps python from exiting until this node is stopped


if __name__ == '__main__':
    try:
        mainloop()
    except rospy.ROSInterruptException:
        pass
