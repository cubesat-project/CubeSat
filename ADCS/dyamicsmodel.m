%dynamics model for the cubesat project 
%third iteration 
%Goal: should take in the intital rotations about the roll pitch and yaw
%axis as measured by gyroscopes and define a quaternion to rotate about.
%The resultant rotation should be applied and the orientation of the
%satellite should be determined. 

p1=[1,0,0];
p2=[0,1,0];
p3=[0,0,1];

delta=1;    %time step 
w_roll=5;   %roll angluar rate
w_pitch=1;  %pitch angular rate
w_yaw=3;    %yaw angular rate

%current_q=[1,0,0,0]; %this might need to change

% %obtaining the quaternion corresponding the rotation of the satellite

%get the quaternion that will produce the rotation dictated by the
%gyroscope measured rates ,w.
plot3(p1(1),p1(2),p1(3),'bo')
hold on
grid on
axis([-1 1 -1 1 -1 1])
xlabel('x')
ylabel('y')
zlabel('z')

plot3(p2(1),p2(2),p2(3),'ro');
plot3(p3(1),p3(2),p3(3),'mo');

for i=0:20
    
    a=w_roll*delta;     %change about x-axis
    b=w_pitch*delta;    %change about y-axis
    c=w_yaw*delta;      %change about z-axis

    a=deg2rad(a);
    b=deg2rad(b);
    c=deg2rad(c);

    curquat=quaternion([c,b,a],'euler','ZYX','point');


    %how rotation effects the reference point previously plotted. 
     
    rotatedframe=rotateframe(curquat,[p1;p2;p3]);
    
    
    plot3(rotatedframe(1,1),rotatedframe(1,2),rotatedframe(1,3),'bd')
    plot3(rotatedframe(2,1),rotatedframe(2,2),rotatedframe(2,3),'rd')
    plot3(rotatedframe(3,1),rotatedframe(3,2),rotatedframe(3,3),'md')

    plot3([0;rotatedframe(1,1)],[0;rotatedframe(1,2)],[0;rotatedframe(1,3)],'k')
    plot3([0;rotatedframe(2,1)],[0;rotatedframe(2,2)],[0;rotatedframe(2,3)],'k')
    plot3([0;rotatedframe(3,1)],[0;rotatedframe(3,2)],[0;rotatedframe(3,3)],'k')
    plot3([0;p1(1)],[0;p1(2)],[0;p1(3)],'k')
    plot3([0;p2(1)],[0;p2(2)],[0;p2(3)],'k')
    plot3([0;p3(1)],[0;p3(2)],[0;p3(3)],'k')
    
     p1=[rotatedframe(1,1),rotatedframe(1,2),rotatedframe(1,3)];
     
     p2=[rotatedframe(2,1),rotatedframe(2,2),rotatedframe(2,3)];
     
     p3=[rotatedframe(3,1),rotatedframe(3,2),rotatedframe(3,3)];
     
     i=i+1;
 
end




