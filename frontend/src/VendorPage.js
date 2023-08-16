import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import './analysis.css'

function AttritionPage() {
  return (
    <div className="App">
      <header className="App-header">
        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: 'aaf28033-0d75-4e35-8fa6-b0e7df06bf2d',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=aaf28033-0d75-4e35-8fa6-b0e7df06bf2d&groupId=4654e0ea-55f4-48f1-8198-bcf791dcec54&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYmU5MzQ1NDAtMmQ2Mi00YjFmLTlhZWQtYzFjOWYzM2E1M2E0LyIsImlhdCI6MTY4ODg5Mjk0NCwibmJmIjoxNjg4ODkyOTQ0LCJleHAiOjE2ODg4OTY5OTUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFWYXJLT3Jjd0dSaEVpN0c1ZGt4bEt2RTVTeXZBOEM4a2U2a2s5TzhwYzRmbXVuUjdLeW83ZGYxWVlwcWFCM3EzIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiVnlhcyIsImdpdmVuX25hbWUiOiJLYWJpciIsImlwYWRkciI6IjI0MDE6NDkwMDoxYzk2OjlmMGE6ZTU5NTphODRhOmZkYmQ6NzcxZiIsIm5hbWUiOiJLYWJpciBWeWFzIiwib2lkIjoiZjNlOTg3Y2QtZDhhMC00YmI1LWEwY2UtZGRjZTg2Y2JjYmNhIiwicHVpZCI6IjEwMDMyMDAyQkFBRkFFOTUiLCJyaCI6IjAuQVVvQVFFV1R2bUl0SDB1YTdjSEo4enBUcEFrQUFBQUFBQUFBd0FBQUFBQUFBQUNKQU84LiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6ImVtMm9NUjlEekVjaTNEbTMzRUxzOWpDcnFqRzBrcVNNQ19CV0x1WldGWlUiLCJ0aWQiOiJiZTkzNDU0MC0yZDYyLTRiMWYtOWFlZC1jMWM5ZjMzYTUzYTQiLCJ1bmlxdWVfbmFtZSI6ImthYmlydnlhc0B0ZWFtNDA0Zm91bmQub25taWNyb3NvZnQuY29tIiwidXBuIjoia2FiaXJ2eWFzQHRlYW00MDRmb3VuZC5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiIzclFHNzZDRTBVaU1yZ0JWeEl4RkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3BsIjoiZW4ifQ.idiKGNP9IbrrqS-3co8lDd8ZtIIedPvHYB92Nqqbx0PdvBr9awdEL7ymreUmBuYJn6DxHFjleOEy0vT4ehivz7ZIYlP0zs2EdhIMbLreTxOME8PxsEnsjapv7Frq3HYTQfQ-22AQfEEJZd4uvlZJWn-_OEhDU4lG00WVXhWYmj_sHwl0OManUt4du886ImrpC67Iq5e0xYnyWSAEDZL12LTTO-QVDI0spA02ePbD4ZWRAZm1dmzOIAnKCXDs5_FlEW_019Xw84GcsUIQ9czzdf22U2BqjsWIlw2eaegQkRYvbc6hjUprHf05-UmrOFbkk__oGk6sS6wyq7PUFVwXKA',
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true
                }
              },
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.Report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default AttritionPage;