const randoitCore = require('./core');
const EARTH_RADIUS = 6371000; // meters
const DEG_TO_RAD = Math.PI / 180.0;
const THREE_PI = Math.PI * 3;
const TWO_PI = Math.PI * 2;

const toRadians = (deg) => deg * DEG_TO_RAD;
const toDegrees = (rad) => rad / DEG_TO_RAD;

const randomCircumferencePoint = (
    centerPoint,
    radius,
    randomFn = Math.random
) => {
    const sinLat = Math.sin(toRadians(centerPoint.latitude));
    const cosLat = Math.cos(toRadians(centerPoint.latitude));

    const bearing = randomFn() * TWO_PI;
    const sinBearing = Math.sin(bearing);
    const cosBearing = Math.cos(bearing);

    const theta = radius / EARTH_RADIUS;
    const sinTheta = Math.sin(theta);
    const cosTheta = Math.cos(theta);

    let rLatitude, rLongitude;
    rLatitude = Math.asin(sinLat * cosTheta + cosLat * sinTheta * cosBearing);

    rLongitude =
        toRadians(centerPoint.longitude) +
        Math.atan2(
            sinBearing * sinTheta * cosLat,
            cosTheta - sinLat * Math.sin(rLatitude)
        );
    rLongitude = ((rLongitude + THREE_PI) % TWO_PI) - Math.PI;

    return { latitude: toDegrees(rLatitude), longitude: toDegrees(rLongitude) };
};

const randomInCircle = (centerPoint, radius, randomFn = Math.random) => {
    return randomCircumferencePoint(
        centerPoint,
        Math.sqrt(randomFn()) * radius,
        randomFn
    );
};

const randomAnnulusPoint = (
    centerPoint,
    innerRadius,
    outerRadius,
    randomFn = Math.random
) => {
    if (innerRadius >= outerRadius) {
        throw new Error(
            `innerRadius (${innerRadius}) should be smaller than outerRadius (${outerRadius})`
        );
    }

    const deltaRadius = outerRadius - innerRadius;

    return randomCircumferencePoint(
        centerPoint,
        innerRadius + Math.sqrt(randomFn()) * deltaRadius,
        randomFn
    );
};

const distance = (P1, P2) => {
    const rP1 = {
        latitude: toRadians(P1.latitude),
        longitude: toRadians(P1.longitude),
    };
    const rP2 = {
        latitude: toRadians(P2.latitude),
        longitude: toRadians(P2.longitude),
    };

    const D = {
        latitude: Math.sin((rP2.latitude - rP1.latitude) / 2),
        longitude: Math.sin((rP2.longitude - rP1.longitude) / 2),
    };

    const A =
        D.latitude * D.latitude +
        D.longitude *
            D.longitude *
            Math.cos(rP1.latitude) *
            Math.cos(rP2.latitude);

    const C = 2 * Math.atan2(Math.sqrt(A), Math.sqrt(1 - A));

    return EARTH_RADIUS * C;
};

const haversine = distance;

module.exports = {
    randomInCircle: randomInCircle,
};
