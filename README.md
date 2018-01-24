# SnapKeys

A web app that helps students to find homeworks solutions by taking a picture of the question.
The app is using Google Vision API for analyzing the text in the uploaded image.

## Get Started

Here is how you can connect to our api:
```javascript

// To Upload An Image

const YOUR_DATA = { file: IMAGE }

$ajax({
  type: "POST",
  url: "https://snapkeys.herokuapp.com/upload",
  data: YOUR_DATA,
  success: YOUR_FUNCTION
});

```

```

The API wil return recommanded courses from coursera and solutions from Chegg
```
## To-Do List
1. Use machine learning to auto categorize questions and suggest related learning materials (Coursera classes .etc);

2. Looking forward to a deeper cooperation with Chegg to provide more detailed solutions for refugees sutdents;

3. Expand the Questions Database to provide a faster and more accurate search for the students;
