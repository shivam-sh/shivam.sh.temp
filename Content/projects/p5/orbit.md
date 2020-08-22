---
title: Orbit
tags: p5.js, simulation
date: 2020-05-08 00:00
description: This project showcase diplays a quick physics-based graphical simulation of orbiting bodies with p5.js
image: images/projects/p5/orbit.jpeg
link: assets/orbit/index.html
---

# Orbit

<div id="sketch" style="height: 600px; margin-bottom: 1em;"></div>
<p><a href="https://github.com/shivam-sh/p5-experiments/tree/master/sketches/orbit" class="button special" style="margin: 1em 0 0 0">View Source</a>
<a href="https://shivam-sh.github.io/p5-experiments/subpages/orbit.html" class="button" style="margin: 1em 0 0 0">Fullscreen</a></p>

Orbit is a physics-based simulation of.. well... orbits!

It is built using the p5.js JavaScript library. The library makes it easier to adapt algorithms and other processes to run programs easily on the web.

Orbit uses real physics equations to accurately model  multiple bodies orbiting a single attractor. It then modifies the values of the equation to allow for a better output. This prevents cases that would be impossible in the real world like impossibly large gravitational acceleration, and also allows for longer-lasting randomized orbits.

The program uses vectors to store the positions, velocities, and accelerations of each object and updates according to the forces that act on each body. It performs these calculations continuously in three-dimensions and then maps the values to output a smooth two-dimensional animation.

This is a relatively simple program yet it can be improved upon in many ways. I can see myself coming back to this in the future and adding in additional interactions between the orbiting bodies or just tinkering with the physics model.

I may even implement a simple version of this into another program as a loading indicator as the semi-chaotic system makes for a very satisfying animation.

Shivam Sh

<script type="text/javascript" src="https://shivam-sh.github.io/p5-experiments/p5/p5.js"></script>
<script type="text/javascript" src="https://shivam-sh.github.io/p5-experiments/sketches/orbit/sketch.js"></script>
<script type="text/javascript" src="https://shivam-sh.github.io/p5-experiments/sketches/orbit/orbiter.js"></script>
<script type="text/javascript" src="https://shivam-sh.github.io/p5-experiments/sketches/orbit/attractor.js"></script>