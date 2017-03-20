/* eslint no-console: 0 */
import Header from './Header';

export default class HeaderExample extends React.Component {

  state = {togglerActive: false};

  switchToggler = () => {
    this.setState({
      togglerActive: !this.state.togglerActive,
    });
  }

  render() {
    return (
      <div>
        <Header
          instructionHref='/about/questions/editor'
          toSiteHref='/catalog'
          toggler={this.state.togglerActive}
          onToggle={this.switchToggler}
          selectedGroupsCount={33}
          onCallProductsAndGroups={() => { console.log('вызов модальника'); }}
          onDeleteSelectedGroup={() => { console.log('Удалить выбранную группу'); }}
          onDeleteEmptyGroup={() => { console.log('Удалить пустые группы'); }}
        />
        <Header
          instructionHref='/about/questions/editor'
          toSiteHref='/catalog'
          onCallProductsAndGroups={() => { console.log('вызов модальника'); }}
        />
      </div>
    );
  }
}