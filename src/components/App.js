import React, { Component } from 'react';

import Share from './Share';
import Header from './Header';
import RailsUpdates from './RailsUpdates';
import RailsVersions from './RailsVersions';
import Airbrake from './Airbrake';
import RailsServers from './RailsServers';
import Databases from './Databases';
import CodeQuality from './CodeQuality';
import GreenfieldRails from './GreenfieldRails';
import TestCoverage from './TestCoverage';
import ActiveJob from './ActiveJob';
import CIServers from './CIServers';
import Containers from './Containers';
import Footer from './Footer';

import love from '../assets/images/rails-love.png';
import hate from '../assets/images/ruby-hate.png';
import loveGem from '../assets/images/loved-gems.png';
import hateGem from '../assets/images/frustrating-gems.png';


class App extends Component {
  render() {
    return (
      <div>
        <div className="position--relative">
          <Header />
          <div className="position--relative">
            <div className="container border--left">
              <div className="row padding-top-lg padding-bottom-md position--relative z-index-1">
                <div className="col-md-8 col-centered">
                  <h1 className="font--headline margin-bottom-xl">2018 Ruby on Rails Developer Community Survey</h1>
                  <p className=" margin-bottom-xs h4 text-center">The Results are in!</p>
                  <p className="margin-bottom-lg">2002 members of the rails community gave us their thoughts on tools, frameworks, and workflows in order to see how the environment has changed. </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="share-container background--white padding-md font--black text-center">
          <Share/>
        </div>

        <div className="background--light-gray padding-xl">
          <div className="h2">Demographics</div>
          <p>Here are some stats examples if we want to do quick stats. </p>
          <div className="row margin-top-md margin-bottom-xl justify-content-center">
            <div className="col-md-3 margin-xs background--darkest-gray padding-md">
              <p className="font--sub-headline montserrat">72</p>
              <p className="montserrat-text">countries represented in the survey</p>
            </div>
            <div className="col-md-3 margin-xs background--darkest-gray padding-md">
              <p className="font--sub-headline montserrat">65<span className="h4">%</span></p>
              <p className="montserrat-text">of respondents reported they work in a product shop </p>
            </div>
            <div className="col-md-3 margin-xs background--darkest-gray padding-md">
              <p className="font--sub-headline montserrat">45<span className="h4">%</span></p>
              <p className="montserrat-text">of respondents have 7+ years of experience working with Rails (75% with 4+)</p>
            </div>
          </div>

          <div className="container margin-top-xl">
            <div className="h2">In the Community</div>
            <div className="row justify-content-center">
              <div className="col-8">
                <p>Between developers in agencies, product shops, and freelancer/contractors, we noticed a few interesting trends.</p>
              </div>
            </div>
            <div className="row margin-top-md justify-content-center">
              <div className="col-md-3 text-left">
                <p className="h6 font--yellow">Agencies</p>
                <p className="border--yellow padding-xs margin-bottom-xs background--darkest-gray">More authored gems</p>
                <p className="border--yellow padding-xs margin-bottom-xs background--darkest-gray">More active in the community*</p>
                <p className="border--yellow padding-xs margin-bottom-xs background--darkest-gray">More monolith, less microsite</p>
              </div>
              <div className="col-md-3 text-left">
                <p className="h6 font--blue">Product shops</p>
                <p className="border--blue padding-xs margin-bottom-xs background--darkest-gray">Tend to be on larger teams</p>
                <p className="border--blue padding-xs margin-bottom-xs background--darkest-gray">Better test coverage</p>
              </div>
              <div className="col-md-3 text-left">
                <p className="h6 text-left font--teal">Freelancers</p>
                <p className="border--teal padding-xs margin-bottom-xs background--darkest-gray">More likely to be self-taught</p>
                <p className="border--teal padding-xs margin-bottom-xs background--darkest-gray">More working in Rails for more than 10+ years</p>
              </div>
              <div className="col-9">
                <p className="text-left">* ie. attending more conferences, authored more gems and attended more users groups.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="background--dark-gray padding-md container">
          <div className="h2">Keeping Rails Up-To-Date</div>

          <RailsUpdates/>
          <RailsVersions/>

          <div className="row justify-content-center">
            <div className="col-8">
              <p>Less than half of respondents felt that most or all of their apps were updated to most recent rails. Why not? Time. Over 30% responded that time was the only issue holding them back. Include content about how x% of the community can benefit from ongoing security updates/core team support while that means that y% are on their own. (We have 38%..so tack on content about the unsupported folks).</p>
            </div>
          </div>
          <GreenfieldRails/>
        </div>

        <div className="padding-xl background--light-gray row justify-content-center">
          <div className="col-md-8">
            <span className="quote-mark font--yellow">&ldquo;</span>
            <p className="h1 montserrat quote">75%</p>
            <p>agree that the Rails core team is shepherding the project in the <span className="font--yellow">right direction</span>.</p>
            <div className="margin-lg">
              <p className="h1 montserrat">43%</p>
              <p>responded <span className="font--yellow">time</span> was the only issue holding them back.</p>
            </div>
            <div className="margin-lg">
              <p className="h1 montserrat">45%</p>
              <p>of respondents felt that most or all of their apps <span className="font--yellow">were updated</span> to the most recent version of Ruby in Rails.</p>
            </div>
            <a href='#' className="h4"><i className="fa fa-twitter-square font--yellow"></i></a>
          </div>
        </div>

        <div className="container padding-top-xl">
          <p className="h2 margin-md">Ruby Gems</p>
          <div className="row justify-content-center">
            <div className="col-10">
              <p className="h5 margin-sm">Which Rubygems do you love? And which frustrate you the most?</p>
            </div>
            <div className="col-8">
              <p>Here’s a chart of all the gems that were named as the most loved and most frustrating, respectively – the size of the text correlates to how often it showed up in our results.</p>
            </div>
          </div>
          <div className="row margin-top-md justify-content-center">
            <div className="col-5">
              <p className="h5">Top <span className="h2 font--yellow">5 </span> <img src={love} className="icon align-middle" alt="smiley face icon with hearts for eyes" /> Gems</p>
              <ol className="margin-top-sm">
                <li>1. devise</li>
                <li>2. sidekiq</li>
                <li>3. pry</li>
                <li>4. rspec</li>
                <li>5. rubocop</li>
              </ol>
            </div>
            <div className="col-5">
              <p className="h5">Top <span className="h2 font--yellow">5 </span> <img src={hate} className="icon align-middle" alt="frowning face icon" /> Gems</p>
              <ol className="margin-top-sm">
                <li>1. nokogiri</li>
                <li>2. devise</li>
                <li>3. activeadmin</li>
                <li>4. activerecord</li>
                <li>5. rspect</li>
              </ol>
            </div>
          </div>
          <div className="h4 margin-top-md">Most <span className="h2 font--yellow">Loved</span> Gems</div>
          <img src={loveGem} className="wordcloud" alt="word cloud of loved gem words" />
          <div className="h4 margin-top-md">Most <span className="h2 font--coral">Frustrating</span> Gems</div>
          <img src={hateGem} className="wordcloud" alt="word cloud of hated gem words" />

        </div>

        <div className="padding-top-xl">
          <div className="h2 margin-bottom-md">Application Exceptions</div>
          <div className="h5">Which Application Exception tracking tools do you use in production?</div>
          <div className="row justify-content-center">
            <div className="col-10">
              <Airbrake />
            </div>
            <div className="col-8">
              <p>Airbrake (formerly Hoptoad) was at 53% back in 2012 and fell to 28% in 2014, 21% in 2016, and has continued to fall to 11% in 2018. One possible reason? The application exception tracking space has become more saturated over the years.</p>
            </div>
            <div className="margin-lg">
              <a href="#" target="_blank" title="2018 Rails Survey Blog Post on Application Tracking" className="btn btn-yellow montserrat font--black">READ MORE ABOUT APPLICATION TRACKING</a>
            </div>
          </div>
        </div>

        <div className="padding-top-xl">
          <div className="h2 margin-bottom-md">Ruby Web Servers</div>
          <div className="h5">Which Rails Servers are you using in production?</div>
          <div className="row justify-content-center">
            <div className="col-10">
              <RailsServers/>
            </div>
            <div className="col-8">
              <p>Puma has continued its upward climb as the Rails server of choice. Usage grew from 17% in 2014 to 35% in 2016 to 48% this year. While Unicorn was on par with Puma in 2016 (at 34% to Puma’s 35%), it has fallen below Passenger this year. Farewell, Unicorn in the coming years? We’ll have to wait and see.</p>
            </div>
          </div>
        </div>

        <div className="padding-top-xl">
          <div className="h2 margin-bottom-md">Databases</div>
          <div className="h5">Which databases do you prefer to use in production?</div>
          <div className="row justify-content-center">
            <div className="col-10">
              <Databases/>
            </div>
            <div className="col-8">
              <p>PostgreSQL continues to lead in terms of usage and preference</p>
            </div>
          </div>
        </div>

        <div className="padding-top-xl">
          <div className="h2 margin-bottom-md">Tools</div>
          <div className="row justify-content-center">
            <div className="pie col-lg-6">
              <div className="h5 margin-lg">What code quality tools do you use?</div>
              <CodeQuality/>
            </div>
            <div className="pie col-lg-6">
              <div className="h5 margin-lg">Of those apps how many have decent test coverage (80%)?</div>
              <TestCoverage/>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="pie col-lg-6">
              <div className="h5 margin-lg">Which Active Job adapters do you use to use to process background jobs?</div>
              <ActiveJob/>
            </div>
            <div className="pie col-lg-6">
              <div className="h5 margin-lg">Which Continuous Integration (CI) servers do you use?</div>
              <CIServers/>
            </div>
          </div>
        </div>

        <div className="padding-xl">
          <div className="h2 margin-bottom-md">Containers</div>
          <div className="row justify-content-center">
            <div className="col-8">
              <Containers />
            </div>
          </div>
        </div>

        <div className="padding-xl background--darkest-gray">
          <div className="row justify-content-center">
            <div className="col-8">
              <div className="h2 margin-bottom-md">Conclusion</div>
              <p>What overarching themes did we uncover through this survey? For one, there are a lot  more tools being used in the Rails community than during our original survey in 2009. There’s more parity and a wider range of options in areas like x, y, and z.</p>
            </div>
            <div className="col-12">
              <a href="https://docs.google.com/spreadsheets/d/1IFRaS-t91ffto__Gxm0nwDNYtjXcg7EFCR7QXvae6HA/edit#gid=40255677" target="_blank" title="2018 Rails Survey Full Results" className="btn btn-yellow montserrat font--black">VIEW ALL SURVEY RESPONSES</a>
            </div>
          </div>
        </div>
        <Footer/>
      </div>

    );
  }
}

export default App;
