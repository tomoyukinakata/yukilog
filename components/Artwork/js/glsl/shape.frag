precision highp float;

uniform sampler2D u_texture;
varying vec2 vUv;

void main() {
    vec4 texture = texture2D(u_texture,vUv);
    gl_FragColor = texture;
}