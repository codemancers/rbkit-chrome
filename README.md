# rbkit-chrome (WIP)

![image](https://cloud.githubusercontent.com/assets/1707078/8805644/f69adad8-2fef-11e5-9552-b52fb16cd756.png)

## Development

If the absolute path to where you cloned this repo is REPO_PATH, run:

```
# OSX only!
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --load-extension=<REPO_PATH> --user-data-dir=$(mktemp -d -t chrome)
```

Above command opens a new session of chrome with the extension enabled.
