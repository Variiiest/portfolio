import axios from 'axios';
import React, { Component } from 'react'

export class Skill extends Component {

    constructor(props) {
        super(props)

        this.state = {
            skilldata: ``
        }
    }


    componentDidMount() {
        axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text')
            .then(response =>
                this.setState({ skilldata: response.data }
                ))


    }

    render() {
        return (
            <div className="bg-gradient-to-b from-blue-100 to-gray-100">
                <section className="sm:px-12 px-2 py-6">
                    <div className="mb-4 md:mb-0 w-full mx-auto relative">

                        <img alt="" src="https://source.unsplash.com/random" className="w-full object-cover lg:rounded-md" style={{ height: '28em' }} />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:space-x-12">
                        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.
                            </h2>
                            <p className="pb-6 pt-12">{this.state.skilldata}</p>

                        </div>

                    </div>
                </section>
            </div>
        )
    }
}

export default Skill
