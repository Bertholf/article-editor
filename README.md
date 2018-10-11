# article editor

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


### Run mock server

```
npm run mock
```

### Run mock upload server

```
npm run mock-upload
```



# The Api

## Blocks

### Layout Blocks

These are the blocks that are appended before and after the exported html. These include the css and js files. The 
layout files can be accessed via as `api/header-block` and `api/footer-block`.

The blocks have 2 fields: name, html


## Content Blocks

These are the blocks which a user is able to drag and update to create a page. A content block consists of:

- name
- category
- preview: image thumb of the block
- template: a vue template to be converted into html 
- variables: an collection of fields available for the user to update. Each variable has:
    - label: the label shown when in edit form
    - category: the category the field belongs to e.g content, style
    - control: component shown when displaying the field. current available options are: color-picker, editor, file-uploader, textbox    
    - default: the default value to use for the variable. specify to show by default when the user loads the block  
    

## Todo

- [ ] Create blocks api in laravel
- [ ] Create an upload route accessible from an external source
- [ ] Add extra controls to enable smooth content management
- [ ] Allow saving of pages