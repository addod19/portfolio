import React, { Component } from 'react';

import './style.css';

export default class AboutPage extends Component {
  render() {
    return (
            <div className="about_wrap">
                <h2>About Page</h2>
                <div className="term-head"></div>
                <section className="terminal">
                    <div className="cur_loc">
                        <div> > <span className="red">Daniel</span>.current_location</div>
                        <div className="red">'Accra', Ghana</div>
                    </div>
                    <div className="cur_loc">
                        <div> > <span className="red">Daniel</span>.current_job</div>
                        <div className="red">'Technical Support Engineer', Microverse</div>
                    </div>
                    <div className="cur_loc">
                        <div> > <span className="red">Daniel</span>.current_job_location</div>
                        <div className="red">'Remote'</div>
                    </div>
                    <div className="cur_loc">
                        <div> > <span className="red">Daniel</span>.education</div>
                        <div className="red">'Remote'</div>
                    </div>
                    <div className="cur_loc">
                        <div> > <span className="red">Daniel</span>.skills</div>
                        <div className="red">'Remote'</div>
                    </div>
                    <div className="cur_loc">
                        <div> > <span className="red">Daniel</span>.interest</div>
                        <div className="red">'Remote'</div>
                    </div>
                    <div className="cur_loc">
                        <div> > <span className="red">Daniel</span>.future</div>
                        <div className="red">['Looking for remote job opportunity, where i can improve on my skills'||
                        'OnSite job opportunities']</div>
                    </div>
                    <div className="cur_loc">
                        <div> > <span className="red">Daniel</span>.contact</div>
                        <div className="red">'Remote'</div>
                    </div>
                    <div className="term-foot"></div>
                </section>
            </div>
    );
  }
}
