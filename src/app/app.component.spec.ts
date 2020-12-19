/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import { TeamList } from './components/team-list/team-list.component';
import { TeamComponent } from './components/team-component/team-component.component';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
          AppComponent, TeamList, TeamComponent
      ],
      imports: [FormsModule]
    });
    TestBed.compileComponents();
  });

  it('should create the Teams and Channels listing app which contains the teams', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const header: DebugElement = fixture.debugElement.query(By.css('.teams-list'));
    fixture.detectChanges();
    expect(header.nativeElement.innerHTML).toContain('team-name');
  }));
});
