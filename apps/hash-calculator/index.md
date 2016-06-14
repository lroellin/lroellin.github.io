---
layout: default
title: Hash Calculator
---
![Screenshot](Hash-Calculator.png)

## Description
A multi-threaded, parallel Hash Calculator.

## Installation / Download
[Download](//raw.githubusercontent.com/lroellin/hash-calculator/master/Hash-Calculator/Hash-Calculator/publish/setup.exe)

Note: As this app is not yet well-known, Smart Screen will not recognize it. Click on *More Info > Run anyway*. This should get better in the future.

It is a ClickOnce application, so you have the choice to update it whenever you start it.

## Features
* Parallel calculation of hash values
* Compare hashes
* Save hash values to file
* Check hash values in file (e.g. .md5)
* See runtime for each algorithm (hover over progress bar)
* Algorithms
  * MD5
  * SHA1
  * SHA256
  * SHA384
  * SHA512
  * More
    * RIPEMD160

### Multi-Threading
* A multi-core machine can run several algorithms simultaneously
* When using several algorithms, you don't have to wait for SHA512 (slow) to finish to display the value of MD5 (fast)
* The GUI does not freeze and is still usable

I did not find a decent Hash Calculator that supports all this. That does not mean other developers are incompetent, it just got a lot easier in the last years to program multi-threaded.

## Limitations
* ClickOnce applications cannot be run as an Administrator or any other user
* Checks are only done on a per-file basis. Files like e.g. MD5SUM or MD5SUMS are not supported

## Changelog
* 1.4.3
  * Feature: Play sound when done (optional)
  * Feature: RIPEMD160 (under More)
  * Enhancement: Showing rules for normalization
* 1.4.2
  * Fix: Status set incorrect while saving
  * Fix: Missing newline in hash file
* 1.4.1:
  * Enhancement: User input (hash file and compare) is now normalized
  * Internal: Cleaner code
* 1.4.0:
  * Feature: Add runtime
  * Feature: Check hash files
  * Enhancement: Save hash file follows sort-of standard (tools like md5sum)
* 1.3.1: Fix: Threading Problem
* 1.3.0:
  * Feature: Error Checks
  * Fix: Borders not resetting correctly
* 1.2.2: First public release

## Known Issues
* Two shortcuts in Start Menu
  * ClickOnce generated two Start Menu shortcuts because of a configuration error. One of them points to an older release. To get rid of this, uninstall the app (via Programs & Features) and re-install again, it will delete all shortcuts.

## Open Source
This tool is open source with an MIT license. You can fork it on [Github](https://github.com/lroellin/Hash-Calculator).
