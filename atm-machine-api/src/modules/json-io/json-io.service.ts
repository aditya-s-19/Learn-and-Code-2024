import { Injectable } from '@nestjs/common';
import fs from 'fs';
import path from 'path';
import { unableToConnectToServerChancePercentage } from 'src/common/constants';
import { dataFolderDirectory } from 'src/common/constants/jsonFileDirectory';
import { JsonIOException } from 'src/common/exceptions/json-io.exception';
import { UnableToConnectToServerException } from 'src/common/exceptions/unable-to-connect-to-server.exception';

@Injectable()
export class JsonIoService {
  private fullDataFolderDirectory = path.join(__dirname, dataFolderDirectory);

  private simulateRandomUnsuccessfulServerConnection() {
    if (Math.random() * 100 <= unableToConnectToServerChancePercentage) {
      throw new UnableToConnectToServerException();
    }
  }

  readFile(fileName: string, allowConnectionFailureSimulation = false): any {
    allowConnectionFailureSimulation &&
      this.simulateRandomUnsuccessfulServerConnection();
    try {
      const filePath = path.join(this.fullDataFolderDirectory, fileName);
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
      throw new JsonIOException();
    }
  }

  writeFile(
    fileName: string,
    data: any,
    allowConnectionFailureSimulation = false,
  ): void {
    allowConnectionFailureSimulation &&
      this.simulateRandomUnsuccessfulServerConnection();
    try {
      const filePath = path.join(this.fullDataFolderDirectory, fileName);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (e) {
      throw new JsonIOException();
    }
  }
}
