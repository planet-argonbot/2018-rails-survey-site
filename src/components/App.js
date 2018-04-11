import React, { Component } from 'react';
import love from '../assets/images/rails-love.png';
import hate from '../assets/images/ruby-hate.png';
import Share from './Share';
import Header from './Header';
import RailsUpdates from './RailsUpdates';
import RailsVersions from './RailsVersions';
import Airbrake from './Airbrake';
import RailsServers from './RailsServers';
import Databases from './Databases';
import CodeQuality from './CodeQuality';
import Containers from './Containers';
import OperatingSystems from './OperatingSystems';
import GreenfieldRails from './GreenfieldRails';
import TestCoverage from './TestCoverage';


class App extends Component {
  render() {
    return (
      <div>
        <div class="position--relative">
          <Header />
          <div class="position--relative">
            <div class="container border--left">
              <div class="row padding-top-lg padding-bottom-md position--relative z-index-1">
                <div class="col-md-8 col-centered">
                  <h1 class="font--headline sm-text-left">2018 Ruby on Rails Developer Community Survey</h1>
                  <p class="margin-top-lg margin-bottom-lg">2002 members of the rails community gave us their thoughts on tools, frameworks, and workflows in order to see how the environment has changed. </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="share-container background--white padding-md font--black text-center">
          <Share/>
        </div>

        <div class="background--light-gray padding-xl">
          <div class="h2">Demographics</div>
          <p>Here are some stats examples if we want to do quick stats. </p>
          <div class="row margin-top-md margin-bottom-xl justify-content-center">
            <div class="col-md-3 margin-xs background--darkest-gray padding-md">
              <p class="font--sub-headline montserrat">72</p>
              <p class="montserrat-text">countries represented in the survey</p>
            </div>
            <div class="col-md-3 margin-xs background--darkest-gray padding-md">
              <p class="font--sub-headline montserrat">65<span class="h4">%</span></p>
              <p class="montserrat-text">of respondents reported they work in a product shop </p>
            </div>
            <div class="col-md-3 margin-xs background--darkest-gray padding-md">
              <p class="font--sub-headline montserrat">45<span class="h4">%</span></p>
              <p class="montserrat-text">of respondents have 7+ years of experience working with Rails (75% with 4+)</p>
            </div>
          </div>

          <div class="container margin-top-xl">
            <div class="h2">In the Community</div>
            <div class="row justify-content-center">
              <div class="col-8">
                <p>Between developers in agencies, product shops, and freelancer/contractors, we noticed a few interesting trends.</p>
              </div>
            </div>
            <div class="row margin-top-md justify-content-center">
              <div class="col-md-3 text-left">
                <p class="h6 font--yellow">Agencies</p>
                <p class="border--yellow padding-xs margin-bottom-xs background--darkest-gray">More authored gems</p>
                <p class="border--yellow padding-xs margin-bottom-xs background--darkest-gray">More active in the community*</p>
                <p class="border--yellow padding-xs margin-bottom-xs background--darkest-gray">More monolith, less microsite</p>
              </div>
              <div class="col-md-3 text-left">
                <p class="h6 font--blue">Product shops</p>
                <p class="border--blue padding-xs margin-bottom-xs background--darkest-gray">Tend to be on larger teams</p>
                <p class="border--blue padding-xs margin-bottom-xs background--darkest-gray">Better test coverage</p>
              </div>
              <div class="col-md-3 text-left">
                <p class="h6 text-left font--teal">Freelancers</p>
                <p class="border--teal padding-xs margin-bottom-xs background--darkest-gray">More likely to be self-taught</p>
                <p class="border--teal padding-xs margin-bottom-xs background--darkest-gray">More working in Rails for more than 10+ years</p>
              </div>
              <div class="col-9">
                <p class="text-left">* ie. attending more conferences, authored more gems and attended more users groups.</p>
              </div>
            </div>
          </div>
        </div>

          <div class="padding-top-xl container">
            <div class="h2 margin-bottom-md">Application Exceptions</div>
            <div class="h5">Which Application Exception tracking tools do you use in production?</div>
            <div class="row">
              <div class="col-12">
                <Airbrake />
              </div>
            </div>
            <p>Airbrake (formerly Hoptoad) was at 53% back in 2012 and fell to 28% in 2014, 21% in 2016, and has continued to fall to 11% in 2018. One possible reason? The application exception tracking space has become more saturated over the years.</p>
            <button class="btn-yellow">READ MORE ABOUT APPLICATION TRACKING</button>
          </div>
          <GreenfieldRails/>
        </div>

        <div class="padding-xl background--light-gray">
          <p class="font--sub-headline font--yellow">"</p>
          <div class="margin-lg">
            <p class="h1 montserrat">45%</p>
            <p>of respondents felt that most or all of their apps <span class="font--yellow">were updated</span> to the most recent version of Ruby in Rails.</p>
          </div>
          <div class="margin-lg">
            <p class="h1 montserrat">43%</p>
            <p>responded <span class="font--yellow">time</span> was the only issue holding them back.</p>
          </div>
        </div>

        <div class="container padding-top-xl">
          <p class="h2 margin-md">Ruby Gems</p>
          <div class="row justify-content-center">
            <div class="col-10">
              <p class="h5 margin-sm">Which Rubygems do you love? And which frustrate you the most?</p>
            </div>
            <div class="col-8">
              <p>Here’s a chart of all the gems that were named as the most loved and most frustrating, respectively – the size of the text correlates to how often it showed up in our results.</p>
            </div>
          </div>
          <div class="row margin-top-md justify-content-center">
            <div class="col-5">
              <p class="h5">Top <span class="h2 font--yellow">5 </span> <img src={love} class="icon align-middle" alt="smiley face icon with hearts for eyes" /> Gems</p>
              <ol class="margin-top-sm">
                <li>1. devise</li>
                <li>2. sidekiq</li>
                <li>3. pry</li>
                <li>4. rspec</li>
                <li>5. rubocop</li>
              </ol>
            </div>
            <div class="col-5">
              <p class="h5">Top <span class="h2 font--yellow">5 </span> <img src={hate} class="icon align-middle" alt="frowning face icon" /> Gems</p>
              <ol class="margin-top-sm">
                <li>1. nokogiri</li>
                <li>2. devise</li>
                <li>3. activeadmin</li>
                <li>4. activerecord</li>
                <li>5. rspect</li>
              </ol>
            </div>
          </div>
          <div class="h4 margin-top-md">Most <span class="h2 font--yellow">Loved</span> Gems</div>
          <p>WordCloud to go here</p>
          <div class="h4 margin-top-md">Most <span class="h2 font--coral">Frustrating</span> Gems</div>
          <p>WordCloud to go here</p>
        </div>

        <div class="padding-top-xl">
          <div class="h2 margin-bottom-md">Application Exceptions</div>
          <div class="h5">Which Application Exception tracking tools do you use in production?</div>
          <div class="row justify-content-center">
            <div class="col-10">
              <ApplicationExceptions/>
            </div>
            <div class="col-8">
              <p>We included 11 options in this question and still had several choose “other”. There are a lot of options out there! And of course, there are a few using no tool at all.</p>
              <button class="btn-yellow">READ MORE ABOUT APPLICATION TRACKING</button>
            </div>
          </div>
        </div>

        <div class="padding-top-xl">
          <div class="h2 margin-bottom-md">Ruby Web Servers</div>
          <div class="h5">Which Rails Servers are you using in production?</div>
          <div class="row justify-content-center">
            <div class="col-10">
              <RailsServers/>
            </div>
            <div class="col-8">
              <p>Puma has continued its upward climb as the Rails server of choice. Usage grew from 17% in 2014 to 35% in 2016 to 48% this year. While Unicorn was on par with Puma in 2016 (at 34% to Puma’s 35%), it has fallen below Passenger this year. Farewell, Unicorn in the coming years? We’ll have to wait and see.</p>
            </div>
          </div>
        </div>

        <div class="padding-top-xl">
          <div class="h2 margin-bottom-md">Databases</div>
          <div class="h5">Which databases do you prefer to use in production?</div>
          <div class="row justify-content-center">
            <div class="col-10">
              <Databases/>
            </div>
            <div class="col-8">
              <p>PostgreSQL continues to lead in terms of usage and preference</p>
            </div>
          </div>
        </div>

        <div class="padding-top-xl">
          <div class="h2 margin-bottom-md">Tools</div>
          <div class="row justify-content-center">
            <div class="col-6">
              <div class="h5 margin-lg">What code quality tools do you use?</div>
              <CodeQuality/>
            </div>
            <div class="col-6">
              <div class="h5 margin-lg">Of those apps how many have decent test coverage (80%)?</div>
              <TestCoverage/>
            </div>
          </div>
        </div>

        <div class="padding-xl">
          <div class="h2 margin-bottom-md">Containers</div>
          <div class="row justify-content-center">
            <div class="col-10">
              <Containers/>
            </div>
          </div>
        </div>

        <div class="padding-xl">
          <div class="h2 margin-bottom-md">Operating Systems</div>
          <div class="h5">Which operating system do you primarily develop your applications on?</div>
          <div class="row justify-content-center">
            <div class="col-10">
              <OperatingSystems/>
            </div>
            <div class="col-8">
              <p>Puma has continued its upward climb as the Rails server of choice. Usage grew from 17% in 2014 to 35% in 2016 to 48% this year. While Unicorn was on par with Puma in 2016 (at 34% to Puma’s 35%), it has fallen below Passenger this year. Farewell, Unicorn in the coming years? We’ll have to wait and see.</p>
            </div>
          </div>
        </div>

        <div class="padding-xl background--darkest-gray">
          <div class="h2 margin-bottom-md">Conclusion</div>
          <p>What overarching themes did we uncover through this survey? For one, there are a lot  more tools being used in the Rails community than during our original survey in 2009. There’s more parity and a wider range of options in areas like x, y, and z.</p>
          <button class="btn-yellow montserrat h6 font--black margin-md">VIEW ALL RESPONSES FROM THE SURVEY</button>
        </div>
      </div>

    );
  }
}

export default App;
