var menuIcon = YouTube.queryselector(".menu-icon")
var sidebar = YouTube.queryselector(".sidebar")


menuIcon.onclick=function()
{
    sidebar.classList.toggle("small-sidebar");
}