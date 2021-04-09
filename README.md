<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the InstantaneousGramme and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** RyanGC93, Sherwood-Group, twitter_handle, ryangconk@gmail.com, project_title, This a clone of Instagram that is built with 
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]




<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/RyanGC93/Sherwood-Group">
    <img src="https://i.imgur.com/JoipYSm.png?1" alt="Logo" width="700" height="80">
  </a>

  <h3 align="center">Instantaneous Gramme</h3>
  <p align="center">
    A clone of Instagram that is built with a React/Redux Frontend and a Flask Backend
    <br />
    <a href="https://github.com/TolulopeVerissimo/InstantaneousGramme/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://instantaneous-gramme.herokuapp.com">View Demo</a>
    ·
    <a href="https://github.com/TolulopeVerissimo/InstantaneousGramme/issues">Report Bug</a>
    ·
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#project-challenges">Project Challenges</a></li>
    <li><a href="#feature-highlights">Feature Highlights</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![product-screenshot](https://i.imgur.com/n3vzM1f.png)




### Built With

* [Flask](https://flask.palletsprojects.com/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy and (optional: a heroku deployed version) up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
* pipenv
  ```sh
  pipenv install
  ```
### Installation

1. Clone the InstantaneousGramme
   ```sh
   git clone https://github.com/TolulopeVerissimo/InstantaneousGramme
   ```

2. Backend Installation
- Follow Instructions for Backend [Instructions](https://github.com/TolulopeVerissimo/InstantaneousGramme/blob/readme/README_BACKEND.md)

3. Frontend Installation
- Follow Instructions for Frontend [Instructions](https://github.com/TolulopeVerissimo/InstantaneousGramme/blob/readme/README_FRONTEND.md)



## Project Challenges
<details>
  <summary>Click to expand!</summary>
  
  
  ## Heading
  1. A numbered
  2. list
     * With some
     * Sub bullets
</details>

## Feature Highlights

### (1) Uploading Images From the Frontend Using AWS buckets
<details>
  <summary>Click to expand!</summary>
  
  ### Summary
  TODO >>>>> ADD Summary
  ### Code Snippet
  ```
  export async function getSignedRequest(photo){
  let res = await fetch('/sign_s3/?file_name='+photo.name+"&file_type="+photo.type);
  if (res.ok) {
    res= await res.json()
    uploadFile(photo, res.data, res.url);
  } else {
    console.error('could not get url')
  }
  return res.data.url + res.data.fields.key
}

export async function uploadFile(file, s3Data, url){
  const data = new FormData()
  for(const key in s3Data.fields){
    data.append(key, s3Data.fields[key]);
  }
  data.append('file', file)
  const res = await fetch(url, {
    method:'POST',
    body: data
  })
  return res
}
  ```
</details>


### (2) Direct messaging using web sockets
<details>
  <summary>Click to expand!</summary>
  
  ### Summary
  TODO >>>>> ADD Summary
  ### Code Snippet
  ```
  export async function getSignedRequest(photo){
  let res = await fetch('/sign_s3/?file_name='+photo.name+"&file_type="+photo.type);
  if (res.ok) {
    res= await res.json()
    uploadFile(photo, res.data, res.url);
  } else {
    console.error('could not get url')
  }
  return res.data.url + res.data.fields.key
}

export async function uploadFile(file, s3Data, url){
  const data = new FormData()
  for(const key in s3Data.fields){
    data.append(key, s3Data.fields[key]);
  }
  data.append('file', file)
  const res = await fetch(url, {
    method:'POST',
    body: data
  })
  return res
}
  ```
</details>

<!-- USAGE EXAMPLES -->
## Usage

============ add pictures of site usage_


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/TolulopeVerissimo/InstantaneousGramme/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Ryan Conk- [Github](https://github.com/RyanGC93) - ryangconk@gmail.com

Ryan Maloney- [Github](https://github.com/r-maloney) - ryangconk@gmail.com

Lu Verissimo- [Github](https://github.com/TolulopeVerissimo) - ryangconk@gmail.com

Jon Werner- [Github](https://github.com/jon-wehner) - ryangconk@gmail.com

Project Link: [https://github.com/TolulopeVerissimo/InstantaneousGramme](https://github.com/TolulopeVerissimo/InstantaneousGramme)



<!-- ACKNOWLEDGEMENTS -->





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/TolulopeVerissimo/InstantaneousGramme.svg?style=for-the-badge
[contributors-url]: https://github.com/TolulopeVerissimo/InstantaneousGramme/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/TolulopeVerissimo/InstantaneousGramme.svg?style=for-the-badge
[forks-url]: https://github.com/TolulopeVerissimo/InstantaneousGramme/network/members
[stars-shield]: https://img.shields.io/github/stars/TolulopeVerissimo/InstantaneousGramme.svg?style=for-the-badge
[stars-url]: https://github.com/TolulopeVerissimo/InstantaneousGramme/stargazers
[issues-shield]: https://img.shields.io/github/issues/TolulopeVerissimo/InstantaneousGramme.svg?style=for-the-badge
[issues-url]: https://github.com/TolulopeVerissimo/InstantaneousGramme/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/TolulopeVerissimo
