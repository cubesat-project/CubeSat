clf;

%Photodiode rotation
azimuthRot = 20; %around x/y    //25, 10
angleRot = 10;
%Photodiode viewing angle
viewAng = 60; %70

%Photodiode list
pList = [];

%See-count lists
list0 = [];
list1 = [];
list2 = [];
list3 = [];
list4 = [];
list5 = [];
list6 = [];
list7 = [];
list8 = [];
list9 = [];
list10 = [];

%create a default color map ranging from red to green
length = 11;
red = [0.1, 0, 0];
green = [0, 1, 0];
colors_p = [linspace(red(1),green(1),length)', linspace(red(2),green(2),length)', linspace(red(3),green(3),length)'];

%Rotations about the axis
%Rx = [1 0 0; 0 cos(ang1) -sin(ang1); 0 sin(ang1) cos(ang1)];
%Ry = [cos(ang1) 0 -sin(ang1); 0 1 0; sin(ang1) 0 cos(ang1)];
%Rz = [cos(ang1) -sin(ang1) 0; sin(ang1) cos(ang1) 0; 0 0 1];
  
%The axis normals
nX = [1 0 0];
nY = [0 1 0];
nZ = [0 0 1];

%
% Units are in centimeters, 1.0 = 1cm
%

%Positive-X panel
ppx_norm = nX;
    ppx_1_pos = ppx_norm + [0 1 5];
    ppx_2_pos = ppx_norm + [0 -1 5];
    ppx_3_pos = ppx_norm + [0 0 -5];
    ppx_1_face = r_vec(r_vec(ppx_norm, nZ, atr(angleRot)), nY, -atr(azimuthRot));
    ppx_2_face = r_vec(r_vec(ppx_norm, nZ, -atr(angleRot)), nY, -atr(azimuthRot));
    ppx_3_face = r_vec(ppx_norm, nY, atr(azimuthRot));
    
%Negative-X panel   
pnx_norm = -nX;
    pnx_1_pos = pnx_norm + [0 1 5];
    pnx_2_pos = pnx_norm + [0 -1 5];
    pnx_3_pos = pnx_norm + [0 0 -5];
    pnx_1_face = r_vec(r_vec(pnx_norm, nZ, atr(angleRot)), nY, atr(azimuthRot));
    pnx_2_face = r_vec(r_vec(pnx_norm, nZ, -atr(angleRot)), nY, atr(azimuthRot));
    pnx_3_face = r_vec(pnx_norm, nY, -atr(azimuthRot));
    
%Positive-Y panel
ppy_norm = nY;
    ppy_1_pos = ppy_norm + [1 0 5];
    ppy_2_pos = ppy_norm + [-1 0 5];
    ppy_3_pos = ppy_norm + [0 0 -5];
    ppy_1_face = r_vec(r_vec(ppy_norm, nZ, -atr(angleRot)), nX, atr(azimuthRot));
    ppy_2_face = r_vec(r_vec(ppy_norm, nZ, atr(angleRot)), nX, atr(azimuthRot));
    ppy_3_face = r_vec(ppy_norm, nX, -atr(azimuthRot));
    
%Negative-Y panel   
pny_norm = -nY;
    pny_1_pos = pny_norm + [1 0 5];
    pny_2_pos = pny_norm + [-1 0 5];
    pny_3_pos = pny_norm + [0 0 -5];
    pny_1_face = r_vec(r_vec(pny_norm, nZ, -atr(angleRot)), nX, -atr(azimuthRot));
    pny_2_face = r_vec(r_vec(pny_norm, nZ, atr(angleRot)), nX, -atr(azimuthRot));
    pny_3_face = r_vec(pny_norm, nX, atr(azimuthRot));
    
%Positive-Z panel
ppz_norm = nZ;
    ppz_1_pos = ppz_norm + [8 2 0];
    ppz_2_pos = ppz_norm + [4 4 0];
    ppz_3_pos = ppz_norm + [2 8 0];
    ppz_1_face = ppz_norm;
    ppz_2_face = ppz_norm;
    ppz_3_face = ppz_norm;
    
%Negative-Z panel   
pnz_norm = -nZ;
    pnz_1_pos = pnz_norm + [2 8 0];
    pnz_2_pos = pnz_norm + [8 8 0];
    pnz_3_pos = pnz_norm + [8 2 0];
    pnz_1_face = pnz_norm;
    pnz_2_face = pnz_norm;
    pnz_3_face = pnz_norm;

%Add the photodiodes to the list
    pList = [pList; ppx_1_pos, ppx_1_face];  
    pList = [pList; ppx_2_pos, ppx_2_face];
    pList = [pList; ppx_3_pos, ppx_3_face]; 

    pList = [pList; pnx_1_pos, pnx_1_face];  
    pList = [pList; pnx_2_pos, pnx_2_face];
    pList = [pList; pnx_3_pos, pnx_3_face];

    pList = [pList; ppy_1_pos, ppy_1_face];  
    pList = [pList; ppy_2_pos, ppy_2_face];
    pList = [pList; ppy_3_pos, ppy_3_face];

    pList = [pList; pny_1_pos, pny_1_face];  
    pList = [pList; pny_2_pos, pny_2_face];
    pList = [pList; pny_3_pos, pny_3_face];

    pList = [pList; ppz_1_pos, ppz_1_face];  
    pList = [pList; ppz_2_pos, ppz_2_face];
    pList = [pList; ppz_3_pos, ppz_3_face];

    pList = [pList; pnz_1_pos, pnz_1_face];  
    pList = [pList; pnz_2_pos, pnz_2_face];
    pList = [pList; pnz_3_pos, pnz_3_face];
    

%Iterate over every position and photodiode and find the coverage
seeCount = 0;
figure(1)
for lat = 0:1:180 %0-180
    for lng = 0:1:359 %0-359
        seeCount = 0;
        vec = r_vec(-nZ, -nY, atr(lat)); %Rotates about the y-axis to the latitude
        vec = r_vec(vec, nZ, atr(lng)); %Rotates about the z-axis to the longitude
        
        %vec = r_vec(-nZ, nY, atr(lat)); %Rotates about the z-axis to the latitude
        %vec = r_vec(vec, nZ, atr(lng)); %Rotate about the z-axis to the longitude
        
        for i = 1 : size(pList)
            if(ang(vec, [pList(i, 4) pList(i, 5) pList(i, 6)]) <= viewAng);
                %showVec = vec
                %showFace = [pList(i, 4) pList(i, 5) pList(i, 6)]
                %showI = i
                seeCount = seeCount+1;
            end
        end

        if(seeCount == 0) list0 = [list0; vec(1) vec(2) vec(3)]; end
        if(seeCount == 1) list1 = [list1; vec(1) vec(2) vec(3)]; end
        if(seeCount == 2) list2 = [list2; vec(1) vec(2) vec(3)]; end
        if(seeCount == 3) list3 = [list3; vec(1) vec(2) vec(3)]; end
        if(seeCount == 4) list4 = [list4; vec(1) vec(2) vec(3)]; end
        if(seeCount == 5) list5 = [list5; vec(1) vec(2) vec(3)]; end
        if(seeCount == 6) list6 = [list6; vec(1) vec(2) vec(3)]; end
        if(seeCount == 7) list7 = [list7; vec(1) vec(2) vec(3)]; end
        if(seeCount == 8) list8 = [list8; vec(1) vec(2) vec(3)]; end
        if(seeCount == 9) list9 = [list9; vec(1) vec(2) vec(3)]; end
        if(seeCount == 10) list10 = [list10; vec(1) vec(2) vec(3)]; end
    end
end
    
if(size(list0) > 0) scatter3(list0(1:end,1), list0(1:end,2), list0(1:end,3), 5, 'black', 'filled'); hold on; 
else scatter3(0, 0, 0, 1, 'black', 'filled'); hold on; end %colors_p(1,:)

if(size(list1) > 0) scatter3(list1(1:end,1), list1(1:end,2), list1(1:end,3), 5, [0.4, 0.2, 0], 'filled'); hold on; %brown
else scatter3(0, 0, 0, 1, [0.4, 0.2, 0], 'filled'); hold on; end

if(size(list2) > 0) scatter3(list2(1:end,1), list2(1:end,2), list2(1:end,3), 5, 'blue', 'filled'); hold on;
else scatter3(0, 0, 0, 1, 'blue', 'filled'); hold on; end
    
if(size(list3) > 0) scatter3(list3(1:end,1), list3(1:end,2), list3(1:end,3), 5, [0.8, 0, 0.8], 'filled'); hold on; %purple
else scatter3(0, 0, 0, 1, [0.8, 0, 0.8], 'filled'); hold on; end

if(size(list4) > 0) scatter3(list4(1:end,1), list4(1:end,2), list4(1:end,3), 5, 'magenta', 'filled'); hold on;
else scatter3(0, 0, 0, 1, 'magenta', 'filled'); hold on; end

if(size(list5) > 0) scatter3(list5(1:end,1), list5(1:end,2), list5(1:end,3), 5, 'red', 'filled'); hold on;
else scatter3(0, 0, 0, 1, 'red', 'filled'); hold on; end

if(size(list6) > 0) scatter3(list6(1:end,1), list6(1:end,2), list6(1:end,3), 5, [1, 0.6, 1], 'filled'); hold on; %pink
else scatter3(0, 0, 0, 1, [1, 0.6, 1], 'filled'); hold on; end

if(size(list7) > 0) scatter3(list7(1:end,1), list7(1:end,2), list7(1:end,3), 5, [1, 0.6, 0], 'filled'); hold on; %orange
else scatter3(0, 0, 0, 1, [1, 0.6, 0], 'filled'); hold on; end

if(size(list8) > 0) scatter3(list8(1:end,1), list8(1:end,2), list8(1:end,3), 5, 'yellow', 'filled'); hold on;
else scatter3(0, 0, 0, 1, 'yellow', 'filled'); hold on; end

if(size(list9) > 0) scatter3(list9(1:end,1), list9(1:end,2), list9(1:end,3), 5, 'green', 'filled'); hold on;
else scatter3(0, 0, 0, 1, 'green', 'filled'); hold on; end

if(size(list10) > 0) scatter3(list10(1:end,1), list10(1:end,2), list10(1:end,3), 5, 'white', 'filled'); hold on;
else scatter3(0, 0, 0, 1, 'white', 'filled'); hold on; end


%black,     0 [50: 98%, 0, 0] HAS DEADSPOTS
%brown,     1
%blue,      2  
%purple,    3 lowest [30, 30]
%magenta,   4
%red,       5
%pink,      6
%orange,    6
%yellow,    8
%green,     9
%white,     10

%One removed on each azis, 27.5 azimuth best?


%60 deg FOV,25, 10 most coverage (95%)
%20, 10 has full equatorial coverage, only 2 on top/bottom.






 xlabel('X');
 ylabel('Y');
 zlabel('Z');  
 
 legend('0','1','2','3','4','5','6','7','8','9','10');

 L0S = size(list0, 1)
 L1S = size(list1, 1)
 L2S = size(list1, 1)
 
 totalPoints = 64620;
 sufCover = (1- (size(list0, 1) + size(list1, 1) + size(list2, 1))/totalPoints)*100;
 optCover = (1- (size(list0, 1) + size(list1, 1) + size(list2, 1) + size(list3, 1))/totalPoints)*100;
 disp(['Sufficient cover : ' num2str(sufCover(:).') '%'])
 disp(['Optimal cover : ' num2str(optCover(:).') '%'])
 
    
function rad = atr(a)
    rad = (a/180)*pi;
end

function deg = ang(u, v)
    deg = atan2d(norm(cross(u,v)),dot(u,v));
end
    
    
    
    
% rodrigues_rot - Rotates array of 3D vectors by an angle theta about vector k.
% Direction is determined by the right-hand (screw) rule.
%
% Syntax:  v_rot = rodrigues(v,k,theta)
%
% Inputs:
%    v - Array of three dimensional vectors to rotate. Array can be 
%           composed of N rows of 3D row vectors or N columns of 3D column
%           vectors. If v is 3x3 array, it is assumed that it is 3 rows of
%           3 3D row vectors.
%    k - Rotation axis (does not need to be unit vector)
%    theta - Rotation angle in radians; positive according to right-hand
%           (screw) rule
%
%   Note: k and individual 3D vectors in v array must be same orientation.
%           
%
% Outputs:
%    v_rot - Array of rotated vectors.
%
% Other m-files required: dot.m (built-in MATLAB)
% Subfunctions: none
% MAT-files required: none
%
% Author: Ismail Hameduddin
%           Mechanical Engineering, Purdue University
% email: ihameduddin@gmail.com
% Website: http://www.ismailh.com
% January 2011; Last revision: 2-January-2012

%------------- BEGIN CODE --------------

function v_rot = r_vec(v,k,theta)
    [m,n] = size(v);
    if (m ~= 3 && n ~= 3)
        error('input vector is/are not three dimensional'), end
    if (size(v) ~= size(k)) 
        error('rotation vector v and axis k have different dimensions'),end
    
    k = k/sqrt(k(1)^2 + k(2)^2 + k(3)^2); % normalize rotation axis
    No = numel(v)/3; % number of vectors in array
    v_rot = v; % initialize rotated vector array
    if ( n == 3 )
        crosskv = v(1,:); % initialize cross product k and v with right dim.
        for i = 1:No
            crosskv(1) = k(2)*v(i,3) - k(3)*v(i,2);
            crosskv(2) = k(3)*v(i,1) - k(1)*v(i,3); 
            crosskv(3) = k(1)*v(i,2) - k(2)*v(i,1);
            v_rot(i,:) = cos(theta)*v(i,:) + (crosskv)*sin(theta)...
                            + k*(dot(k,v(i,:)))*(1 - cos(theta));
        end
    else % if m == 3 && n ~= 3
        crosskv = v(:,1); % initialize cross product k and v with right dim.
        for i = 1:No
            crosskv(1) = k(2)*v(3,i) - k(3)*v(2,i);
            crosskv(2) = k(3)*v(1,i) - k(1)*v(3,i); 
            crosskv(3) = k(1)*v(2,i) - k(2)*v(1,i);
            v_rot(:,i) = cos(theta)*v(:,i) + (crosskv)*sin(theta)...
                            + k*(dot(k,v(:,i)))*(1 - cos(theta));
        end
    end
end

%------------- END OF CODE --------------
