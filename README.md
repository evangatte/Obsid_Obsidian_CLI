<h1 style="text-align: center;">Obsidian CLI</h1>

<p style="text-align: center;">A command line interface built with Typescript used to open and search Obsidian Vaults</p>

-----

For list of commands run `obsid -h`:

```
Commands:
        open: open vault or vault and file
                Examples: 
                        obsid open -v "My Vault"
                        obsid open -v "My Vault" -f "My File"
                        obsid open -p "path/to/file/inside/of/vault"


        search: open search inside of vault
                Examples:
                        obsid search -v "My Vault"
                        obsid search -v "My Vault" -q "My Search Query"


Flags:
        -v/--vault
        -p/--path
        -f/--file
        -q/--query
		-h/--help

```


- Due to life I dont really have much time to put toward this project, but as is the `open` and `search` commands work as intended.


## Installation (must have typescript installed)
- Clone this repository
- from the command line run `tsc` inside of the projects root directory.
	- this will create a `dist` directory, `dist/index.js` will be the entry point into the program.
- The simplest way to use this cli is by creating a zsh alias that can be called from the command line:
	- Inside of your zsh config file (`~/.zshrc`) add:
		```
		obsid() {
			node <path>/<to>/<project root>/dist/index.js $@
		}
		```


