import discoverData from '../data/discover.json';

export async function getData(): Promise<any> {
  return discoverData;
}
