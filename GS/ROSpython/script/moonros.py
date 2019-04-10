#!/usr/bin/env python


import rospy
from std_msgs.msg import Int16
from geometry_msgs.msg import Vector3
import ephem
import datetime
from math import degrees as deg


def callback0(data):
    rospy.loginfo(rospy.get_caller_id() + 'I heard %s', data)
    # write down like home.lat=??? data.x


def mainloop():
    rospy.init_node('sunros', anonymous=True)  # node name talker
    pub = rospy.Publisher('motor_1', Int16, queue_size=10)
    pub1 = rospy.Publisher('motor_2', Int16, queue_size=10)

    rate = rospy.Rate(0.5)  # hz send

    while not rospy.is_shutdown():  # test if shutdown

        now = datetime.datetime.utcnow()
        home = ephem.Observer()
        home.date = now
        home.lat, home.lon = '42.593948', '-81.174415'
        moon = ephem.Sun()
        moon.compute(home)
        moon_azimuth = round(deg(float(moon.az)), 0)
        moon_altitude = round(deg(float(moon.alt)), 0)

        motor_1 = moon_altitude  # for gearbox
        if moon_azimuth>180:
            motor_2=moon_azimuth-360
        else:
            motor_2 = moon_azimuth
        pub.publish(motor_1)
        pub1.publish(motor_2)
        hello_str = "azal%s  %s" % (motor_1, motor_2)
        rospy.loginfo(hello_str)

        rospy.Subscriber('GPSlocation', Vector3, callback0)
        rate.sleep()
    #rospy.spin()
    # spin() simply keeps python from exiting until this node is stopped




if __name__ == '__main__':
    try:
        mainloop()
    except rospy.ROSInterruptException:
        pass
