% GRAVITY GRADIENT
% u: gravitational parameter
% r: spacecraft position vector
% I: principal moment of inertia
Mggx = (3 * n ^ 2) * r * (I * rx);
Mggy = (3 * n ^ 2) * r * (I * ry);
Mggz = (3 * n ^ 2) * r * (I * rx);

% SOLAR TORQUE
% P: pressure
% A: area
% theta: Euler angle
% Cs: 
% Cd: 
% n:
Ps = Is / c;
Fsolar = (1 + K) * Ps * S;
Tsolar = rcp * Fsolar;

% AERODYNAMIC TORQUE
% CD: aerodynamic drag coefficient
% rho: atmospheric density
% V: spacecraft velocity
% A: frontal projected area
% rcp: distance between CoM and centre of pressure
Faero = - 1/2 * CD * rho * V ^ 2 * A;
Taero = rcp * Faero;

% MAGNETIC TORQUE
% M: spacecraft residual dipole
% B: Earth magnetic field vector in spacecraft coordinates
T = M * B;
