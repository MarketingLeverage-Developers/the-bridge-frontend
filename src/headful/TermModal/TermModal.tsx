'use client';
import Modal from '@/headless/Modal/Modal';
import React from 'react';
import styles from './TermModal.module.scss';
import dynamic from 'next/dynamic';
const Portal = dynamic(() => import('@/headless/Portal/Portal'), { ssr: false });

const TermModal = () => {
    return (
        <Modal>
            <Modal.Trigger className={styles['term-modal__button']}>내용보기</Modal.Trigger>
            <Portal>
                <Modal.Backdrop />
                <Modal.Content className={styles['term-modal']}>
                    <div className={styles['term-modal-line']}>
                        <div className={styles['term-modal-container']}>
                            <label className={styles.label}>개인정보 수집 및 이용 동의*</label>
                            <div className={styles.agree}>
                                <h1>개인정보 수집 및 이용 동의서</h1>
                                <section>
                                    <h2>1. 개인정보 수집 및 이용 목적</h2>
                                    <p>본인은 아래의 목적을 위해 개인정보를 수집 및 이용하는 것에 동의합니다.</p>
                                    <ul>
                                        <li>서비스 제공 및 상담, 문의 응대</li>
                                        <li>회원 관리 및 본인 확인</li>
                                        <li>마케팅 및 광고 활용 (선택 동의 시)</li>
                                    </ul>
                                </section>
                                <section>
                                    <h2>2. 수집하는 개인정보 항목</h2>
                                    <p>
                                        <strong>필수 항목:</strong> 성명, 연락처(전화번호, 이메일), 주소
                                    </p>
                                    <p>
                                        <strong>선택 항목:</strong> 생년월일, 기타 제공하는 정보
                                    </p>
                                </section>
                                <section>
                                    <h2>3. 개인정보의 보유 및 이용 기간</h2>
                                    <p>
                                        수집된 개인정보는 목적 달성 후 즉시 파기됩니다. 단, 관련 법령에 따라 일정 기간
                                        보관할 필요가 있는 경우 해당 기간 동안 보관 후 삭제됩니다.
                                    </p>
                                    <ul>
                                        <li>
                                            계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래 등에서의 소비자보호에
                                            관한 법률)
                                        </li>
                                        <li>
                                            소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래 등에서의
                                            소비자보호에 관한 법률)
                                        </li>
                                        <li>기타 관련 법령에 따른 보관 기간</li>
                                    </ul>
                                </section>
                                <section>
                                    <h2>4. 개인정보 제공 및 위탁</h2>
                                    <p>
                                        본 기관은 원칙적으로 이용자의 동의 없이 개인정보를 외부에 제공하지 않습니다.
                                        다만, 법령에 의거하여 요구되는 경우 예외로 합니다.
                                    </p>
                                </section>
                                <section>
                                    <h2>5. 동의를 거부할 권리 및 불이익</h2>
                                    <p>
                                        이용자는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며, 동의 거부 시
                                        일부 서비스 이용이 제한될 수 있습니다.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </Modal.Content>
            </Portal>
        </Modal>
    );
};

export default TermModal;
