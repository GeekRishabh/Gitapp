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
    const url = "https://api.github.com/search/repositories?q="+searchString;
    let count;
       //console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.githubList = responseJson;
         //this.count=responseJson.total_count ; 
        // return 
        //     this.githubList = responseJson.items;
         // console.log(this.count);
         console.log(responseJson);
      });
      
  }

}
const githubStore = new GithubStore()

export default githubStore;