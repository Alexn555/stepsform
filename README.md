# Filedocumenter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Details
 
 1. Installation
  
  Please upload all source file to some  projects/[projectname] folder and cmd -> npm install 
  This will install all needed libraries
  
 2. Structure
   
    Current stucture is following:
	   
	   modules / 
	      common / error-page -> component for 404 error page not found
		  dynamic-form / 3rd Party solution (angular-dynamic-forms-master) with some improvements on my side
		     module to create global html input elements 
		  register-form -> main implementation module that uses dynamic-from module components   
		        to create step-by-step registation form 
			 common / -> common form styles
             base / -> base #1 step component form  
             profession / -> profession select form #2
             additional / -> additional not required information #3 form 
             submit -> complete phase with one submit button
             header-navigation -> neat header icons indicator
             step-navigation -> button Prev and Next navigation 
             main -> main controller component that handles step switch logic  			 
		    register.model -> interfaces
			register.module -> moduel bundle
			register.service -> mainly grab data from data json
		  
	   shared /  
		   helpers / -> helper utility wrappers that handle common functionality, string date manipulation
		      date-handler -> for date operations
			  string-handler -> string operations
		   services / -> common services that could be used in multiple modules, components
		      notificationService -> uses angular2-notifications to show success, error messages
			  form.service -> service to parse and fetch real validators to generate proper dynamic input elements
			  
		app.ts -> main entry point component 
        app.module -> main wrapper module		

       assets/ 
	     i18n / -> translations
		 img / -> images
		 data / -> data mockup files
		   register-form.json -> model data for registration form 
		   states.json -> not used, but in overall to load state options
		   
	   scss / -> common scss files  
          datatable.scss -> ngx-database override style wrapper 
          variables.scss -> common scss variables 
          style.scss -> main scss application style
 
       tsconfig.app.json ->  paths source file settings
 
     Libraries used:
	   All of them latest versions:
	    Bootstrap 4, 
		core-ui template base
		ngx-translate
		angular2-notifications	
		font-awesome 	
 
    3. How to run 
	    Please open Chrome (tested in latest version of it) or Firefox
		cmd -> npm run start
		Open link: localhost:4200
		
		Now you should see the application
		Hope this progam will be useful for you, any ideas are ok
		
	Version log:	
	 v 1.0.0 -> first stable version
		
		