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
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYmU5MzQ1NDAtMmQ2Mi00YjFmLTlhZWQtYzFjOWYzM2E1M2E0LyIsImlhdCI6MTY4ODk4NjAzNywibmJmIjoxNjg4OTg2MDM3LCJleHAiOjE2ODg5OTAyNDEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFXaGpXSXBoYlVVVVRsTDhqc3h4eVVYNHZnK2FBcHYvTDQwd201Zi9YVUFMNSt0MytCZ0RHd1F2Y1pqbVZmYW5BIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjIzZDhmNmJkLTFlYjAtNGNjMi1hMDhjLTdiZjUyNWM2N2JjZCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiVnlhcyIsImdpdmVuX25hbWUiOiJLYWJpciIsImlwYWRkciI6IjI0MDE6NDkwMDoxYzk3OmQ1YTU6YWQyMTo5YTZhOmM1ODQ6NWU2MSIsIm5hbWUiOiJLYWJpciBWeWFzIiwib2lkIjoiZjNlOTg3Y2QtZDhhMC00YmI1LWEwY2UtZGRjZTg2Y2JjYmNhIiwicHVpZCI6IjEwMDMyMDAyQkFBRkFFOTUiLCJyaCI6IjAuQVVvQVFFV1R2bUl0SDB1YTdjSEo4enBUcEFrQUFBQUFBQUFBd0FBQUFBQUFBQUNKQU84LiIsInNjcCI6IkFwcC5SZWFkLkFsbCBDYXBhY2l0eS5SZWFkLkFsbCBDYXBhY2l0eS5SZWFkV3JpdGUuQWxsIENvbnRlbnQuQ3JlYXRlIERhc2hib2FyZC5SZWFkLkFsbCBEYXNoYm9hcmQuUmVhZFdyaXRlLkFsbCBEYXRhZmxvdy5SZWFkLkFsbCBEYXRhZmxvdy5SZWFkV3JpdGUuQWxsIERhdGFzZXQuUmVhZC5BbGwgRGF0YXNldC5SZWFkV3JpdGUuQWxsIEdhdGV3YXkuUmVhZC5BbGwgR2F0ZXdheS5SZWFkV3JpdGUuQWxsIFBpcGVsaW5lLkRlcGxveSBQaXBlbGluZS5SZWFkLkFsbCBQaXBlbGluZS5SZWFkV3JpdGUuQWxsIFJlcG9ydC5SZWFkLkFsbCBSZXBvcnQuUmVhZFdyaXRlLkFsbCBTdG9yYWdlQWNjb3VudC5SZWFkLkFsbCBTdG9yYWdlQWNjb3VudC5SZWFkV3JpdGUuQWxsIFRlbmFudC5SZWFkLkFsbCBUZW5hbnQuUmVhZFdyaXRlLkFsbCBVc2VyU3RhdGUuUmVhZFdyaXRlLkFsbCBXb3Jrc3BhY2UuUmVhZC5BbGwgV29ya3NwYWNlLlJlYWRXcml0ZS5BbGwiLCJzdWIiOiJlbTJvTVI5RHpFY2kzRG0zM0VMczlqQ3Jxakcwa3FTTUNfQldMdVpXRlpVIiwidGlkIjoiYmU5MzQ1NDAtMmQ2Mi00YjFmLTlhZWQtYzFjOWYzM2E1M2E0IiwidW5pcXVlX25hbWUiOiJrYWJpcnZ5YXNAdGVhbTQwNGZvdW5kLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImthYmlydnlhc0B0ZWFtNDA0Zm91bmQub25taWNyb3NvZnQuY29tIiwidXRpIjoiM3F4bzVwa2hfay05TGFpUGNnWmlBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19wbCI6ImVuIn0.LnYwfM8daxXWKs2j4nuBcrzaClbqIxnE8EEg7aX_LNfn8Xm2hIT7tLd0I5um17_ivSSApfHIXpkF6d5EzrGb0pfjzTxsrZ7A0zCFOg_ZbB4EZPBucilxymHcGIIKimZrG7SLK0p6MS8zoqHBOhxozGlxzXLFxZ5-kF4O_pgv307AzW00PYqDIuP2-aK-nzeCO-eolnclwAU4mQ4lqNvBNaOxM0rnZhw91uSPrFy7xLFwHGriQ7pgypEL4AyaAXLXv4Vy2mAvahKautNJ4aYXcclL-5qZiylTzJnWWUQ2Y9_at51hJyddLwb21EOFstvL5aVgVOEZXcIWlFsomYRxgg',
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