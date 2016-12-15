import {observable, computed} from 'mobx';

class GithubStore {

    @observable githubList = [];
    @observable searchString ='';

//let URL = 'https://api.github.com/search/repositories';
// receive(searchString){
// console.log(searchString);
// this.githubList.push(
// {  searchString:searchString ,
    
//     });
// console.log(this.githubList.length);
// console.log();
// }


 fetchData(searchString) {
		//add searchString to url and then search it
    console.log(searchString);
    return fetch("https://api.github.com/search/repositories?q={searchString}")
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.items;
        //console.log(responseJson.items);
      });
      
  }

}
const githubStore = new GithubStore()

export default githubStore;