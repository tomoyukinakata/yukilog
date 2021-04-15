attribute vec3 position;
attribute vec2 uv;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float u_time;
varying vec2 vUv;

void main() {
    float wave1 = 0.1 * sin(0.5 * position.x + u_time * 2.0);
    float wave2 = 0.1 * sin(2.0 * position.x + u_time * 2.0);
    float x = position.x;
    float y = position.y;
    float z = (wave1 + wave2) * (2.0 + position.x);
    vUv = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(vec3(x,y,z), 1.0 );
}