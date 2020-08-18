A = 29/100^2 %solar panel area (m^2)
eff = 0.24 %solar panel efficiency
K = 1380 %solar irradiance (W/m^2)
I0 = 4 * A * K * cosd(0) * eff %assuming 4 cells per panel -> 3.84W max
nadir = [5 4 3] %estimate for nadir vector for Albedo correction
correction = 0

%Coordinate vector defn
Xb = [1 0 0];
Yb = [0 1 0];
Zb = [0 0 1];

%Input current per each panel (assuming upto 6)
I = input('Input as [I1, I2, I3, I4, I5, I6]: ');

%Calculate alpha, beta, delta angles relative to each axis

%If solar panel in neg direction detects light, take angle relative to
%opposite side
%Else solar panel in pos direction detects light, take angle normally
if I(1)==0
    alpha = 180 - acosd(I(4)/I0);
else
    alpha = acosd(I(1)/I0);
end

if I(2)==0
    beta = 180 - acosd(I(5)/I0);
else
    beta = acosd(I(2)/I0);
end

if I(3)==0
    gamma = 180 - acosd(I(6)/I0);
else
    gamma = acosd(I(3)/I0);
end

Sb = [cosd(alpha) cosd(beta) cosd(gamma)];
disp(Sb)

%Check if albedo correction required by computing angle between sun sensor
%and nadir vector
%Accounts for field-of-view of albedo effect

%Fixed 100% of albedo accounted for 
if atan2d(norm(cross(Sb, nadir)), dot(Sb, nadir)) < 65
    %albedo correction requires nadir-vec to be 30% of sun-vec magnitude
    nadir_mag = norm(Sb) * 0.35; 

    %scale nadir vec by required magnitude
    nadir_unit = nadir / norm(nadir);
    nadir_correction = nadir_unit * nadir_mag;

    %corrected sun-vector 
    Sb = Sb + nadir_correction;
    
%Variable albedo accounted for 
elseif atan2d(norm(cross(Sb, nadir)), dot(Sb, nadir)) > 65 && atan2d(norm(cross(Sb, nadir)), dot(Sb, nadir)) < 95
    %scale factor from 0 - 1.0
    correction = atan2d(norm(cross(Sb, nadir)), dot(Sb, nadir)) - 65 / 30;
    nadir_mag = norm(Sb) * correction;
    
    nadir_unit = nadir / norm(nadir);
    nadir_correction = nadir_unit * nadir_mag;
    
    Sb = Sb + nadir_correction;
end


