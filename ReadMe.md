# La'Borh Admin Page
La'Borh is an e-commerce site selling clothes. This admin page allows administrators to update existing products, add new products, and control which products are seen by customers on the actual e-commerce site through this easy-to-use user interface.
## Data Models
Data model for a specific product:
```javascript
{
    name: string,
    quantity: int,
    price: int,
    images: [image object IDs],
    status: bool, // true if product is active, false if product is not active
    style: [strings]
}
```
Data model for an image:
```javascript
{
    imageName: string,
    imageData: string, // ASCII text representing the image as a Base64 string
    productID: ObjectID
}
```

## New skills applied in this project
Creating a full-stack web application that dynamically accepts new images, and displays previously uploaded images presents various challenges. Some of these challenges include filtering which file types can be uploaded, how to deal with extra-large images, how to deal with images of varying aspect ratios, and how to save these images in a database.
###
To work with images in this project, I used the `react-filebase64` package. This package allowed me to filter which image types I allowed (only .jpg currently), and converts the image into a storable Base64 string of ASCII text.
```javascript
import React, {useState} from 'react';
import FileBase from 'react-file-base64';

const FileBaseExample = () => {
    const [images, setImages] = useState([]);

    const getBaseFile = (files) => {
        const imageObjs = []; // created a temp array in case one or more of the uploaded files is not a jpeg image
        for (let i = 0; i < files.length; i++) {
            if (files[i].type !== 'image/jpeg') {
                return;
            }
            let imageObj = {
                imageName: "base-image-" + Date.now(),
                imageData: files[i].base64.toString()
            };
            imageObjs.push(imageObj);
        }
        setImages(imageObjs);
    }

    return (
        <FileBase type="file" multiple={true} onDone={getBaseFile} />
    )
}
return FileBaseExample;
```
###
To avoid the error `request entity too large` surrounding extra-large images, I modified my server to allow for larger file sizes. The max file size was set to 10MB.
###
Currently, the images I'm using have similar aspect ratios. I just ran a test on what happens to the display when a landscape-type image is uploaded. No errors are thrown and the image is still kept to a certain width, but it doesn't have the same visual appeal. I could solve this by setting a container for the images and giving it a fixed height and width so that images would rest neatly within it without modifying other parts of the page.

## Areas to Improve
Currently, my API is being run on the same server as my front-end. This limits the number of potential HTTP requests, so for future reference, I'll separate these components and maximize the number of possible HTTP requests available.
###
For future projects, I'll include more input validation. The main input validation in this project regards the images being uploaded.
###
Realistically, clothes are not a one-size-fits-all item. The `quality` characteristic of my `product object` should have been the following data type, rather than an int.
```javascript
{
    xs: int,
    s: int,
    m: int,
    l: int,
    xl: int,
    xxl: int
}
```
Sometimes, people also search for clothes by descriptive factors such as color, size, design, etc. Although I do sort these products by their type, I should have included those other descriptive factors.