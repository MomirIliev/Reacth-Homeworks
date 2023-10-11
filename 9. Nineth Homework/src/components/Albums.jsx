import { useContext } from "react";
import { AlbumsContext } from "./../utils/GalleryContext";

export function Albums() {
  const { albums } = useContext(AlbumsContext);
  console.log(albums);
  return (
    <div id="albums">
      {albums.length !== 0 && (
        <table border={1}>
          <thead>
            <tr>
              <th>User ID</th>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((album) => {
              return (
                <tr key={album.id}>
                  <td>{album.userId}</td>
                  <td>{album.id}</td>
                  <td>{album.title}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
