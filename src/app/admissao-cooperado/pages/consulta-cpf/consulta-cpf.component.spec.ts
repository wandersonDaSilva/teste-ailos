import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCpfComponent } from './consulta-cpf.component';

describe('ConsultaCpfComponent', () => {
    let component: ConsultaCpfComponent;
    let fixture: ComponentFixture<ConsultaCpfComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ConsultaCpfComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConsultaCpfComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});