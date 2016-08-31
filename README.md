# Timing

A client timing module that passes timing data to an endpoint

## What is it?

Gathers `window.performance.timing` data after the `window.onload` event fires.

## Language

Vanilla Javascript

## Debug

To set debug pass the query string value `?debug=true`. This will allow logs
to be shown in the browser console.

## POST data to an endpoint

Set the property `window.timingPostUrl = <host>`

## Example

1. Run your favorite static server
2. Load /example/index.html
3. See the DOMContentLoaded output
