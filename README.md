<h1 style="text-align: center;">Obsid</h1>

<p style="text-align: center;">A command line interface for opening and searching Obsidian Vaults built with Typescript.</p>

-----

<b>Only Works on MacOs</b>


# Usage
For a list of commands run `obsid -h`:

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





# Installation (must have NodeJs installed)
```
git clone git@github.com:evangatte/Obsid_Obsidian_CLI.git
cd Obsid_Obsidian_CLI
npm install
npx tsc
```
- This will create a `dist` directory, `dist/index.js` will be the entry point into the program.
- The simplest way to use this CLI is by creating a zsh alias that can be called from the command line:
	- Inside of your zsh config file (`~/.zshrc`) add:
		```
		obsid() {
			node <path>/<to>/<project root>/dist/index.js $@
		}
		```

----

[Yargs](https://www.npmjs.com/package/yargs) is used for command line argument parsing.

Due to life I dont really have time to put toward this project, but as is the `open` and `search` commands work as intended.
