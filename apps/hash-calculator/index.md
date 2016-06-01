---
layout: default
title: Hash Calculator
---
![Screenshot](Hash-Calculator.png)

## Description
A multi-threaded Hash Calculator.

## Installation / Download
[Download](//raw.githubusercontent.com/lroellin/hash-calculator/master/Hash-Calculator/Hash-Calculator/publish/setup.exe)

Note: As this app is not yet well-known, Smart Screen will not recognize it. Click on *More Info > Run anyway*. This should get better in the future.

It is a ClickOnce application, so you have the choice to update whenever you start it.

### Technical Details
I did not find a decent Hash Calculator that uses multiple threads in parallel, even though this makes a lot of sense. The user interface and each hashing algorithm runs in its own thread. This keeps the user interface responsive and is a lot faster when using a lot of algorithms.

## Changelog
* 1.3.0:
  * Feature: Error Checks
  * Fix: Borders not resetting correctly
* 1.2.2: First public release

## Open Source
This tool is open source with an MIT license. You can fork it at [Github](https://github.com/lroellin/Hash-Calculator).
