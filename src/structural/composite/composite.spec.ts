import { File } from './file.js';
import { FileManager } from './file-manager.js';
import { Folder } from './folder.js';

describe('Composite Pattern', () => {
  it('should correctly add a file to a root folder', () => {
    const root = new Folder({ name: 'root', path: '/' });
    const file = new File({ name: 'test.txt', path: '/test.txt' });
    root.add(file);
    expect(root.getComponents()).toEqual([file]);
  });

  it('should correctly create a file tree', () => {
    const root = new Folder({ name: 'root', path: '/' });
    const folder1 = new Folder({ name: 'Folder 1', path: 'folder1/' });
    const folder2 = new Folder({ name: 'Folder 2', path: 'folder2/' });
    const folder3 = new Folder({ name: 'Folder 3', path: 'folder3/' });
    const folder2_1 = new Folder({ name: 'Folder 2.1', path: 'folder2-1/' });

    root.add(folder1);
    root.add(folder2);
    root.add(folder3);
    folder2.add(folder2_1);

    const file1 = new File({ name: 'file1.txt', path: '/file1.txt' });
    const file2 = new File({ name: 'file2.txt', path: '/file2.txt' });
    const file3 = new File({ name: 'file3.txt', path: '/file3.txt' });
    const file4 = new File({ name: 'file4.txt', path: '/file4.txt' });
    const file5 = new File({ name: 'file5.txt', path: '/file5.txt' });
    const file6 = new File({ name: 'file6.txt', path: '/file6.txt' });

    folder1.add(file1);
    folder1.add(file2);
    folder2.add(file3);
    folder2.add(file4);
    folder2_1.add(file5);
    folder3.add(file6);

    const fileManager = new FileManager(root);

    expect(fileManager.getTree()).toEqual({
      children: [
        {
          children: [
            {
              id: expect.any(String),
              name: 'file1.txt',
              path: '/file1.txt',
            },
            {
              id: expect.any(String),
              name: 'file2.txt',
              path: '/file2.txt',
            },
          ],
          id: expect.any(String),
          name: 'Folder 1',
          path: 'folder1/',
        },
        {
          children: [
            {
              children: [
                {
                  id: expect.any(String),
                  name: 'file5.txt',
                  path: '/file5.txt',
                },
              ],
              id: expect.any(String),
              name: 'Folder 2.1',
              path: 'folder2-1/',
            },
            {
              id: expect.any(String),
              name: 'file3.txt',
              path: '/file3.txt',
            },
            {
              id: expect.any(String),
              name: 'file4.txt',
              path: '/file4.txt',
            },
          ],
          id: expect.any(String),
          name: 'Folder 2',
          path: 'folder2/',
        },
        {
          children: [
            {
              id: expect.any(String),
              name: 'file6.txt',
              path: '/file6.txt',
            },
          ],
          id: expect.any(String),
          name: 'Folder 3',
          path: 'folder3/',
        },
      ],
      id: expect.any(String),
      name: 'root',
      path: '/',
    });
  });
});
