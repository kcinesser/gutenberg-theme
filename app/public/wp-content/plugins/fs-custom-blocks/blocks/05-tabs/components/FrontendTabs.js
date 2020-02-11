import { Component } from 'react';

const tempTabs = [
  {
    title: "Tab 1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title: "Tab 2",
    body: "Make it to the carpet before i vomit mmmmmm find something else more interesting, yet run in circles. If it smells like fish eat as much as you wish cat not kitten around for when in doubt, wash. Meow stare out the window give attitude. Licks paws. Eat grass, throw it back up sit and stare i’m so hungry i’m so hungry but ew not for that . Howl uncontrollably for no reason purrrrrr for lick plastic bags meowzer, soft kitty warm kitty little ball of furr or where is my slave? I'm getting hungry. Experiences short bursts of poo-phoria after going to the loo. My water bowl is clean and freshly replenished, so i'll drink from the toilet i like cats because they are fat and fluffy favor packaging over toy i like frogs and 0 gravity. Eat from dog's food going to catch the red dot today going to catch the red dot today so i love cuddles and cough hairball on conveniently placed pants need to chase tail lick plastic bags, fight an alligator and win."
  },
  {
    title: "Tab 3",
    body: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to."
  }
]

export default class FrontendTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      tabs: tempTabs
    }
  }

  handleClick = (tab) => {
    this.setState({activeTab: tab})
  }

  renderHeader = () => {
    return this.state.tabs.map((tab, index) => {
      return <div className={"tabs__header__item " + (index === this.state.activeTab ? 'active' : '') }  key={index} onClick={() => this.handleClick(index)}>{tab.title}</div>
    })
  }

  renderBody = () => {
    const tabs = this.state.tabs
    return <div>{tabs[this.state.activeTab].body}</div>
  }

  render() {
    return (
      <div className="tabs">
        <div className="tabs__header">
          {this.renderHeader()}
        </div>
        <div className="tabs__body">
          {this.renderBody()}
        </div>
      </div>
    );
  }
}
