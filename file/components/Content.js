import React from "react"

export default function Content() {
    return (
        <main>
            <div className="info">
                <h2>It's Chloe Ngo</h2>
                <h4>3rd Year Student - CS Major </h4>
                <a href="https://itschloengo.carrd.co/#" target="_blank">Visit My Website</a>
                <div className="headerButton">
                    <a href = "mailto: chloengo1704@gmail.com">
                    <button className="emailButton"></button>
                    </a>
                </div>
            </div>
            <div className="bodyContain">
                <h3>About</h3>
                <p>Here is a little background about me. I was borned and raised in Vietnam, I came to America back in fall 2017 and attended my first college in the U.S. at Seattle College. I then transferred to Edmonds College a year later and started pursuing my dream of being a software developer. I was able to finish the Association Degree as well as Java Developer Certificate back in August 2020.</p>
                
                <h3>Journey</h3>
                <p>I took a one year gap, during that time I worked part time as a barista for a small tea shop and was a student assistant at North Seattle College. I also helped tutor my friend and small group of students with their C++ class. I moved to Pullman right after summer break in 2021 and went to Washing State University for one semester. At the moment, I am a third year student at University of Washington, and planning to finish my Computer Science degree at the end of 2023.</p>
            </div>
        </main>
    )
}