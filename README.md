# StepsForm

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
	      common / error-page -> component for 404 error page not found  <br/>
		  dynamic-form / 3rd Party solution (angular-dynamic-forms-master) with some improvements on my side  <br/>
		     module to create global html input elements   <br/>
		  register-form -> main implementation module that uses dynamic-from module components     <br/>
		        to create step-by-step registation form  <br/>
			 common / -> common form styles  <br/>
             base / -> base #1 step component form   <br/>
             profession / -> profession select form #2  <br/> 
             additional / -> additional not required information #3 form  <br/>
             submit -> complete phase with one submit button  <br/>
             header-navigation -> neat header icons indicator  <br/>
             step-navigation -> button Prev and Next navigation  <br/>
             main -> main controller component that handles step switch logic  	<br/>		  
		    register.model -> interfaces  <br/>
			register.module -> moduel bundle  <br/>
			register.service -> mainly grab data from data json  <br/>
		  <br/>
	   shared /   <br/>
		   helpers / -> helper utility wrappers that handle common functionality, string date manipulation <br/>
		      date-handler -> for date operations  <br/>
			  string-handler -> string operations  <br/>
		   services / -> common services that could be used in multiple modules, components  <br/>
		      notificationService -> uses angular2-notifications to show success, error messages  <br/> 
			  form.service -> service to parse and fetch real validators to generate proper dynamic input elements  <br/>
			  <br/>
		app.ts -> main entry point component   <br/>
        app.module -> main wrapper module		<br/>
     <br/>
       assets/   <br/> 
	     i18n / -> translations  <br/>
		 img / -> images  <br/>
		 data / -> data mockup files  <br/>
		   register-form.json -> model data for registration form   <br/>
		   states.json -> not used, but in overall to load state options   <br/>
		    <br/>
	   scss / -> common scss files   <br/>
          datatable.scss -> ngx-database override style wrapper  <br/>
          variables.scss -> common scss variables   <br/>
          style.scss -> main scss application style   <br/>
 <br/>
       tsconfig.app.json ->  paths source file settings  <br/>
 <br/>
     Libraries used:  <br/>
	   All of them latest versions:  <br/>
	    Bootstrap 4,  <br/>
		core-ui template base  <br/>
		ngx-translate  <br/>
		angular2-notifications	<br/> 
		font-awesome  <br/>	
 <br/>
    3. How to run   <br/>
	    Please open Chrome (tested in latest version of it) or Firefox <br/>
		cmd -> npm run start  <br/>
		Open link: localhost:4200  <br/>
		
		Now you should see the application  <br/>
		Hope this progam will be useful for you, any ideas are ok  <br/>
		<br/>
	Version log:	 <br/>
	 v 1.0.0 -> first stable version  <br/>
		
		
