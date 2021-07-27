import React, { Component } from 'react'
import Awards from '../components/Awards'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Profile from '../components/Profile'
import Projects from '../components/Projects'

export class Resume extends Component {
    render() {
        return (
            <div>
                <Profile />

                <Experience />
                <Education />
                <Awards />
                <Projects />
            </div>
        )
    }
}
