//  Fetch inside App
// Tabelaren prikaz na property od posts

export function Posts({ postsList }) {
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {postsList.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
