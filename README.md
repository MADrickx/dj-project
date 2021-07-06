# dj-project
dj-project

## Angélique, Audric & Naim (BeCode@hamiltons 5.32)

complete exercices with HTML/CSS.

if you want to use SASS and have an easy transpiler i'll explain how to set it up within your terminal (Linux, windows or macOs).

## First thing first

install node.js, found it [here](https://nodejs.org/en/)  
it will *unlock* the __npm__ command.

## Secondly

install dart-sass with your terminal, write :  

```
npm install -g sass
```  

the -g flag indicates you're installing it for the whole device.

## thirdly

with your terminal, go to your active directory, write :  

```
cd /path/to/your/working/directory
``` 

Now that you're in right directory, you may start the transpiler, write :

```
sass sass/screen.scss css/screen.css --watch
```  

### I'll explain what the above does : 

1. __*sass*__ : it calls the newly added package, dart-sass, to your terminal.

2. __*sass/screen.scss*__ : this argument tells node-sass the directory from where it will fetch the data to "feed" the transpiler.

3. __*css/screen.css*__ : this argument tells node-sass the output directory, were the transpiled file will go when it's finished to transpile.

4. __*--watch*__  : this flag will make node-sass stay put and watch your files, and every time there is a modification, it will sees it.  

## now ?

you're all set, everytime you're gonna save/modify your screen.scss (or the files imported inside your screen.scss) it will transpile all your files into a .css file inside your /css directory.  

/!\ Watch out, I showed you how *I* did it with the files named __my way__. If your files/directory have other names, modify your code accordingly, or just use the same tree as me.

Thanks my lads, now I'm gonne drink a cold one with the boïs!
