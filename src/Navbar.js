import { Link } from 'react-router-dom' ;

const  Navbar= () => {   //sfc            style{}的{}裡放動態值
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link> 
                {/*<Link> is used to set the URL and keep track of browsing history.Anytime we link to an internal path, we will use <Link> instead of <a href="">.
               区别是：<Link> 是 react-router 里实现路由跳转的链接，一般配合 <Route> 使用，react-router 接管了其默认的链接跳转行为，
                <Link> 的“跳转”行为只会触发相匹配的 <Route> 对应的页面内容更新，而不会刷新整个页面。
                而 <a> 标签就是普通的超链接了，用于从当前页面跳转到 href 指向的另一个页面（非锚点情况）。
                 */}
                <Link to="/create" style={
                    {
                    color:"white",
                    backgroundColor:'#f1356d',
                    borderRadius:'8px'
                    } 
                }>New Blog</Link>  
            </div>
        </nav>
    );
}
 
export default Navbar;