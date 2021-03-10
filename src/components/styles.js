import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Main = styled.main`
    width: 100%;
    height: 100vh;
`;

const Sidebar = styled.aside`
    width: 600px;
    
    border-left: 8px solid #e0e0e0;
    
    height: 100vh;
 
    h2 {
        font-family: OpenSans;
        font-size: 20px;
        font-weight: normal;
    }
`;

const SidebarHeader = styled.div`
    height: 55px;
    padding: 10px 0;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
`;

const SidebarContent = styled.div`
    overflow-y: auto;
    padding: 0 24px 16px;
    height: calc(100% - 55px);
`;

const KeywordContainer = styled.div`
    margin-top: 16px;
`;

export { Container, SidebarContent, KeywordContainer, Main, Sidebar, SidebarHeader }
