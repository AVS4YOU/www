import React from "react";
import styled from 'styled-components';
import Text from '../text';

import Img from '../../images/avs-video-editor-final/cinema-slider/download_icon.svg';

const TableStyled = styled.div`
table { 
  height: 100%;
	width: 907px; 
  border-collapse: collapse; 
  margin:50px auto;
  box-shadow: 0 5px 7px rgba(0, 0, 0, .2);
	}
  
tr { 
  background: #fff;
  height: 180px; 
  }
  .tableTitle{
    width:50%;
    text-align: left ;
  }
  .tableTitleDesc{
    vertical-align:text-bottom;
  }
  .tableId{
    width:25%;
    text-align: center;
    vertical-align:middle;
    font-size: 22px;
    font-weight: 700;
  }
  .tableDwn{
    width:25%;
    text-align: center;
    vertical-align:middle;
  }
  .hrfTableDwn{
    padding-left: 5%; 
  }
  .tbImg{
    width: 20px;
    position: center;
    vertical-align:middle;
  }
th { 
	background: #3498db; 
	color: white; 
	font-weight: bold; 
	}
  .hDataTitle{
    padding-top: 10px;
    font-size: 22px;
    color: #333;
  }
  .tableTitle a :hover{
    text-decoration: underline;
    text-decoration-color: #333;
  }
td, th { 
	padding: 10px; 
	/*border: 1px solid #ccc; */
	text-align: left; 
	font-size: 16px;
  }
  .hrfTableTitle{
    text-decoration: none;
  }
  tr:first-child{
    height: auto;
    vertical-align:middle;
  }
  tr:first-child td{
    image-rendering: none;
    font-size: 22px;
    color: #000; 
    background-color: #E8E8E8;
    vertical-align:middle;
  }

  tr:first-child td img{
    display: none;
  }

  tr:first-child td a{
    text-decoration: none;
    color: #000; 
  }

  tr:first-child .tableDwn{
    text-align: left;
    padding-left: 5%;
    font-weight: 0;  
    border-radius: 0px 5px 5px 0px;
  }
  tr:first-child .tableId{
    text-align: center; 
    font-weight: 500;
    border-radius: 5px 0px 0px 5px;
  }
  tr:first-child .hDataTitle{
    text-align: left;
    padding-top: 0px;
    font-weight: 500;
    text-decoration: none;
  }

  .TextTable{
    width: 904px;
    font-size: 16px;
    margin:50px auto;
  }

  .headerTable{
    width: 90%;
    font-size: 48px;
    margin:50px auto;
    text-align: center;
  }

@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	table { 
	  	width: 90%; 
  }
  
  .TextTable{
    width: 90%;
  }
  .headerTable{
    width: 90%;
  }

	th, td, tr { 
    font-size: 14px;
	}
	
	td { 
    position: cover;
    font-size: 14px;
  }

	td:before { 
		position: absolute;
		width: 20%; 
		white-space: nowrap;
		content: attr(data-column);
		color: #000;
		font-weight: bold;
	}

}

@media only screen and (max-device-width: 600px) {
  .headerTable{
    text-align: center;
    font-size:25px;
    font-weight: 600;
    width: 90%;
}
.TextTable{
  width:340px;
}
	table { 
    width: 90%; 
}
.TextTable{
  width: 90%;
}

th, td, tr { 
  font-size: 14px;
}

td { 
  position: relative;
  font-size: 14px;
  padding-left: 5px;
}

.hDataTitle{
  font-size: 14px;
  width: 85%;
}
.tableTitleDesc{
  font-size: 14px;
}
.tableId{
  font-size: 14px;
  width: 5%;
}
.tableDwn{
  width: 10%;
  font-size: 14px;
}
tr:first-child td{
  image-rendering: none;
  font-size: 14px;
  color: #000; 
  vertical-align:middle;
}
}
`;
  
 class TableRow extends React.Component {
    render() {
      const {
        data, headerTable, footerTable, hrefTable
      } = this.props;
      const row = data.map((data) =>
      <tr>
        <td className="tableId" key={data.id}>{data.id}</td>
        <td className="tableTitle" key={data.title}><a target="_blank" rel="noreferrer noopener" href={data.title.hr} className="hrfTableTitle"><h1 className="hDataTitle">{data.title.hed}</h1></a><span className="tableTitleDesc">{data.title.desc}</span></td>
        <td className="tableDwn" key={data.dwn}><span className="spanTableDwn"><img className="tbImg" src={Img}></img><a target="_blank" rel="noreferrer noopener" href={data.dwn.hrf} className="hrfTableDwn">{data.dwn.wrd}</a></span></td>
      </tr>
      );
      return (
        <span>{row}</span>
      );
    }
  }
  
  export default class Table extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <TableStyled>
        <Text className="headerTable">{this.props.headerTable}</Text>
        <table className="DataTable">
          <TableRow data={this.props.data} />
        </table>
      <Text className="TextTable">{this.props.footerTable} <a target="_blank" href="mailto:affiliates@avs4you.com">{this.props.hrefTable}</a>.</Text>
        </TableStyled>
      );
    }
  }
  