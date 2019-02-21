import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { resolve } from 'path';

export class PlatformMock {
  public ready(): Promise<string> {
    return new Promise((resolve) => {
      resolve('READY');
    });
  }

  public getQueryParam() {
    return true;
  }

  public registerBackButtonAction(fn: Function, priority?: number): Function {
    return (() => true);
  }

  public hasFocus(ele: HTMLElement): boolean {
    return true;
  }

  public doc(): HTMLDocument {
    return document;
  }

  public is(): boolean {
    return true;
  }

  public getElementComputedStyle(container: any): any {
    return {
      paddingLeft: '10',
      paddingTop: '10',
      paddingRight: '10',
      paddingBottom: '10',
    };
  }

  public onResize(callback: any) {
    return callback;
  }

  public registerListener(ele: any, eventName: string, callback: any): Function {
    return (() => true);
  }

  public win(): Window {
    return window;
  }

  public raf(callback: any): number {
    return 1;
  }

  public timeout(callback: any, timer: number): any {
    return setTimeout(callback, timer);
  }

  public cancelTimeout(id: any) {
    // do nothing
  }

  public getActiveElement(): any {
    return document['activeElement'];
  }
}

export class StatusBarMock extends StatusBar {
  styleDefault() {
    return;
  }
}

export class SplashScreenMock extends SplashScreen {
  hide() {
    return;
  }
}

export class NavMock {
 
  public pop(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }
 
  public push(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }
 
  public getActive(): any {
    return {
      'instance': {
        'model': 'something',
      },
    };
  }
 
  public setRoot(): any {
    return true;
  }

  public registerChildNav(nav: any): void {
    return ;
  }

}

export class NavParamsMock {
  static returnParam = null;
  public get(key): any {
    if (NavParamsMock.returnParam) {
       return NavParamsMock.returnParam
    }
    return 'default';
  }
  static setParams(value){
    NavParamsMock.returnParam = value;
  }
}
export class DeepLinkerMock {

}



export class ModalMock {
  public static instance(): any {
    let _dismissCallback: Function;
      let instance = jasmine.createSpyObj('Modal', ['present', 'dismiss', 'onDidDismiss']);
      instance.present.and.returnValue(Promise.resolve());
      
      instance.dismiss.and.callFake(() => {
          // _dismissCallback();
          return Promise.resolve();
      });

      instance.onDidDismiss.and.callFake((callback: Function) => {
          _dismissCallback = callback;
      });

      return instance;
  }
}

export class ModalControllerMock {
  public static instance(modalMock?: ModalMock): any {
      let instance = jasmine.createSpyObj('ModalController', ['create']);
      instance.create.and.returnValue(modalMock || ModalMock.instance());

      return instance;
  }
}

export class ToastMock {
  public static instance(): any {
    let _dismissCallback: Function;
      let instance = jasmine.createSpyObj('Toast', ['present', 'dismiss', 'onDidDismiss']);
      instance.present.and.returnValue(Promise.resolve());
      
      instance.dismiss.and.callFake(() => {
          // _dismissCallback();
          return Promise.resolve();
        });
  
        instance.onDidDismiss.and.callFake((callback: Function) => {
            _dismissCallback = callback;
        });
  
        return instance;
    }
  }
export class AlertMock {
  public static instance(): any {
      let _dismissCallback: Function;
      let instance = jasmine.createSpyObj('Alert', ['present', 'dismiss', 'onDidDismiss','presentDynamicAlert']);
      instance.present.and.returnValue(Promise.resolve());
      instance.presentDynamicAlert.and.returnValue(Promise.resolve());
      
      instance.dismiss.and.callFake(x => {
       //   _dismissCallback(x);
          return Promise.resolve();
      });

      instance.onDidDismiss.and.callFake((callback: Function) => {
          _dismissCallback = callback;
          if (callback) {
            //return true;
          //  _dismissCallback = callback;
          }
      });

      return instance;
  }
}

export class ToastControllerMock {
  public static instance(toastMock?: ToastMock): any {
      let instance = jasmine.createSpyObj('ToastController', ['create']);
      instance.create.and.returnValue(toastMock || ToastMock.instance());
      return instance;
    }
  }
export class AlertControllerMock {
  public static instance(alertMock?: AlertMock): any {

      let instance = jasmine.createSpyObj('AlertController', ['create']);
      instance.create.and.returnValue(alertMock || AlertMock.instance());

      return instance;
  }
}

export class StorageMock {
  public static instance(): any {
    let _dismissCallback: Function;
      let instance = jasmine.createSpyObj('Storage', ['get','set','remove','clear']);
      instance.get.and.returnValue(Promise.resolve());
      
      instance.set.and.callFake(() => {
          return Promise.resolve();
      });

      instance.remove.and.callFake(() => {
        return Promise.resolve();
    });
    instance.clear.and.callFake(() => {
      return Promise.resolve();
  });
      return instance;
  }
  
}

export class LoadingMock {
  public static instance(): any {
      let instance = jasmine.createSpyObj('Loading', ['present', 'dismiss', 'setContent', 'setSpinner']);
      instance.present.and.returnValue(Promise.resolve());

      return instance;
  }
}

export class LoadingControllerMock {
  public static instance(loading?: LoadingMock): any {

      let instance = jasmine.createSpyObj('LoadingController', ['create']);
      instance.create.and.returnValue(loading || LoadingMock.instance());

      return instance;
  }
}

export class EventsMock {
  public static instance(): any {
      return jasmine.createSpyObj('events', ['subscribe', 'publish', 'unsubscribe']);
  }
}

