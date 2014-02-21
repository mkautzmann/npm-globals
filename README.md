# My Global NPM packages

## What's this?

This is project is just a list of packages useful to install when you're doing web development.

I had the idea of getting this list because I'm constantly changing machines so I want to keep track of my global npm packages.
Fork this and make your own list if you enjoy.

## How it works?

It'll install all the packages listed in `list.json` globally. So you can change that json any way you want to fit your needs.

The idea is to update `list.json` when you get a new global package so when you run the script on a new machine everything you got will be there. Also, thanks to NPM, the script knows when you already installed something and skip it or update it.

You can specify versions for the package using NPM notation, this way: `bower@1.2.8`

## Run it!

To run the project simply fork it, `cd` to the project folder and run `npm install`

## Contributing

In order to change the list of packages you're going to download please modify list.json.

If you think you got a great package that everyone should use globally please feel free to fill an issue or send a pull request.

## Open source projects used

Thanks to [@lastboy](https://github.com/lastboy/) for the [package-script](https://github.com/lastboy/package-script) tool.

## LICENSE

[MIT LICENSE](LICENSE.md)