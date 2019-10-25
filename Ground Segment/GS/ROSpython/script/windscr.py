import requests
import rospy
from std_msgs.msg import Int16
from geometry_msgs.msg import Vector3


def callback0(data):
    rospy.loginfo(rospy.get_caller_id() + 'I heard %s', data)

    global lon, lat, z1
    lon = data.x
    lat = data.y
    z1 = data.z


def mainloop():
    rospy.init_node('moonros', anonymous=True)  # node name talker
    pub = rospy.Publisher('warning', Int16, queue_size=10)


    rate = rospy.Rate(0.5)  # hz send

    if z1 == 0:
        latitude, longitude = '42.593948', '-81.174415'
    else:
        latitude = lat
        longitude = lon


    url = 'http://api.openweathermap.org/data/2.5/weather?lat={}&lon={}&appid= 490446786e4c209edabc5f75f7e86c39 &units=metric'.format(latitude, longitude)

    res = requests.get(url)

    data = res.json()

    temp = data['main']['temp']
    wind_speed = data['wind']['speed']

    latitude = data['coord']['lat']
    longitude = data['coord']['lon']

    description = data['weather'][0]['description']

    print('Temperature : {} degree celcius'.format(temp))
    print('Wind Speed : {} m/s'.format(wind_speed))
    print('Latitude : {}'.format(latitude))
    print('Longitude : {}'.format(longitude))
    print('Description : {}'.format(description))
    if wind_speed>(72/3.6):
        boolwind=1
    else:
        boolwind=0
    pub.publish(boolwind)
    rospy.Subscriber('GPSlocation', Vector3, callback0)
    rate.sleep()

if __name__ == '__main__':
    try:
        mainloop()
    except rospy.ROSInterruptException:
        pass